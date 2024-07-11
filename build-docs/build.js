
/*
 * The Lurch project is now storing all source code documentation in *this*
 * repository.  That is, although the documentation itself is generated from
 * jsDoc comments in the source code from the main repository (at
 * https://github.com/lurchmath/lurch), the HTML files built from those comments
 * are stored in this repository.
 * 
 * This script is used to build those HTML files.
 * 
 * To do that, it downloads the latest zip archive of the Lurch repository into
 * a temporary folder in this machine, unzips it, and builds the documentation
 * for each of three different sub-projects: the user interface, the core
 * classes, and the validation engine.  It ensures that this build process
 * contains all the steps needed (including running code in tutorial files to
 * update the console output and adding MathJax to generated HTML) and places
 * the resulting files in a subfolder of the `site/` folder, so that they can
 * be viewed from the project website (and linked to from the main pages on the
 * website).
 */

import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { promisify } from 'node:util'
import { exec } from 'node:child_process'
const execAsync = promisify( exec )
import { fileExists, folderExists } from './utils.js'
import { buildDocs } from './jsdoc-utils.js'
import { rmSync } from 'node:fs'

const lurchArchiveZip = 'https://github.com/lurchmath/lurch/archive/refs/heads/main.zip'
const workingFolder = tmpdir()
const downloadedZip = join( workingFolder, 'lurch.zip' )
const extractedFolder = join( workingFolder, 'lurch-main' ) // GitHub convention
const includePattern = '.+\\.js(doc|x)?$|.+\\.[mc]js$'

//
//  Delete any old downloads so we start afresh
//
if ( fileExists( downloadedZip ) ) {
    console.log( 'Deleting old downloaded zip archive...' )
    rmSync( downloadedZip )
}
if ( folderExists( extractedFolder ) ) {
    console.log( 'Deleting old extracted zip folder...' )
    rmSync( extractedFolder, { recursive : true, force : true } )
}

//
//  Download the latest commit of the Lurch repository
//
console.log( 'Downloading latest archive of Lurch repository...' )
await execAsync( `wget "${lurchArchiveZip}" -O "${downloadedZip}"` )
console.log( `    Downloaded file ${downloadedZip}` )

console.log( 'Unzipping downloaded repository archive...' )
await execAsync( `unzip "${downloadedZip}" -d "${workingFolder}"` )
console.log( `    Extracted folder ${extractedFolder}` )

// One test folder contains a symlink to a missing API key file, which is
// intentional, because the API key should not be submitted to GitHub.  That
// symlink works only on a developer's local installation, but it confuses
// jsDoc, so we must eliminate it.  We just drop the whole folder containing it,
// because no file in that folder contains source code documentation anyway.
const testFolder = join( extractedFolder, 'lurchmath', 'tests' )
if ( folderExists( testFolder ) ) {
    console.log( '    Removing test folder with symlinks to missing API keys...' )
    rmSync( testFolder, { recursive : true, force : true } )
}

//
//  Run the build process for the source code documentation of the UI
//
await buildDocs( 'ui', 'lurchmath', {
    metadata : { title : 'Lurch web user interface' },
    source : {
        includePattern,
        excludePattern : 'api-key-secret\\.js|docs\\/',
    },
    opts : {
        readme : join( extractedFolder, 'lurchmath', 'doc-main.md' )
    }
}, workingFolder, extractedFolder )

//
//  Run the build process for the source code documentation of the core classes
//
await buildDocs( 'core', 'lde', {
    metadata : { title : 'Lurch core classes' },
    source : {
        includePattern,
        excludePattern : 'database\\/*\\.js|src\\/experimental|docs\\/'
    },
    opts : {
        tutorials : 'lde/tutorials/input',
        readme : join( extractedFolder, 'lde', 'doc-main.md' )
    }
}, workingFolder, extractedFolder )

//
//  Run the build process for the source code documentation of the engine
//
await buildDocs( 'engine', 'lde/src/experimental', {
    metadata : { title : 'Lurch validation engine' },
    source : {
        includePattern,
        excludePattern : 'scripts\\/acidtests\\.js|docs\\/'
    },
    opts : {
        readme : join( extractedFolder, 'lde', 'src', 'experimental', 'readme.md' )
    }
}, workingFolder, extractedFolder )

console.log( '\nDone.' )
