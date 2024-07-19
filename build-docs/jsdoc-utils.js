
// This is a helper module for the build.js script in this same folder.
// See the comments in that file for more information.

import { mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { writeFile } from 'node:fs/promises'
import { folderExists, addMathJaxToFolder } from './utils.js'
import { runTutorials } from './tutorial-utils.js'
import { promisify } from 'node:util'
import { exec } from 'node:child_process'
const execAsync = promisify( exec )
import { rmSync } from 'node:fs'

const webRepoRoot = join( import.meta.dirname, '..' )
const outputParentFolder = join( webRepoRoot, 'apidocs' )
const jsDocDefaults = {
    plugins : [ "plugins/markdown" ],
    opts : {
        template : join( webRepoRoot, 'node_modules', 'tidy-jsdoc' ),
        "prism-theme" : "prism-default",
        encoding : "utf8",
        recurse : true,
        verbose : false
    },
    markdown : { idInHeadings : true },
    templates : { "default" : { includeDate : false } },
    styles : { "nav-width" : "335px" }
}

/*
 * Function that runs jsDoc on one collection of source code files, possibly
 * also running example code in the corresponding tutorial files, and always
 * adding MathJax support to the resulting HTML files.
 * 
 * name = name of the output folder (e.g., "ui" or "core" or "engine")
 * pathInLurchRepo = path from the root of the Lurch repository to the folder
 *   containing the source code files whose documentation should be built
 * config = jsDoc configuration object to use when running jsDoc (at a minimum,
 *   this should specify `metadata.title` and `source.includePattern` and
 *   `source.excludePattern`, plus anything else you want)
 * pwd = what folder you want to be the current working directory when running
 *   any code in the tutorial files
 * pathToLurchRepo = absolute path to the root of the Lurch repository that was
 *   downloaded and unzipped into a temporary folder by the main build.js script
 */
export const buildDocs = async (
    name, pathInLurchRepo, config, pwd, pathToLurchRepo
) => {
    // Compute necessary constants
    const inputFolder = join( pathToLurchRepo, pathInLurchRepo )
    const targetFolder = join( outputParentFolder, name )
    // Organize the config object
    const options = JSON.parse( JSON.stringify( jsDocDefaults ) )
    options.opts = {
        ...jsDocDefaults.opts,
        ...config.opts,
        destination : targetFolder
    }
    delete config.opts
    config = { ...options, ...config }
    // Ensure we have the destination folders and that they are empty
    console.log( `\nBuilding docs for: ${config.metadata.title}...` )
    if ( !folderExists( outputParentFolder ) ) {
        console.log( `    Creating top-level API docs folder...` )
        mkdirSync( outputParentFolder )
    }
    if ( folderExists( targetFolder ) ) {
        console.log( `    Deleting previously built docs folder...` )
        rmSync( targetFolder, { recursive : true } )
    }
    if ( !folderExists( targetFolder ) ) {
        console.log( `    Creating new, empty docs folder...` )
        mkdirSync( targetFolder )
    }
    // If there are tutorials, run the code in them and modify them in place
    if ( config.opts.tutorials ) {
        config.opts.tutorials = join( pathToLurchRepo, config.opts.tutorials )
        console.log( `    Running code in all tutorial files...` )
        const results = await runTutorials( config.opts.tutorials, pathToLurchRepo )
        console.log( `        Processed ${results.length} tutorial files.` )
    }
    // Run jsDoc (finally!)
    console.log( `    Writing jsDoc configuration file...` )
    const configFile = join( pwd, 'jsdoc-config.json' )
    await writeFile( configFile, JSON.stringify( config, null, 4 ) )
    console.log( `        Wrote to: ${configFile}` )
    console.log( `    Running jsDoc on "${name}" code...` )
	const jsDocBin = join( webRepoRoot, 'node_modules', '.bin', 'jsdoc' )
	const command = `"${jsDocBin}" "${inputFolder}" -c "${configFile}"`
	await execAsync( command )
    console.log( `        Documentation built into: ${targetFolder}` )
    // Add MathJax support to the jsDoc output HTML files
    console.log( `    Adding MathJax support to built web pages...` )
	addMathJaxToFolder( targetFolder )
    console.log( `Done building source code docs for: ${config.metadata.title}.` )
}

