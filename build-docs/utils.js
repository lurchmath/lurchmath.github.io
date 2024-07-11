
// This is a helper module for the build.js script in this same folder.
// See the comments in that file for more information.

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { statSync } from 'node:fs'
import { join } from 'node:path'

/*
 * Utility function to check whether a file exists (returning false if it does
 * not exist or is not a file).
 */
export const fileExists = absPath => {
    try {
        const statObj = statSync( absPath )
        return statObj.isFile()
    } catch ( _ ) {
        return false
    }
}

/*
 * Utility function to check whether a folder exists (returning false if it does
 * not exist or is not a folder).
 */
export const folderExists = absPath => {
    try {
        const statObj = statSync( absPath )
        return statObj.isDirectory()
    } catch ( _ ) {
        return false
    }
}

/*
 * We can embed MathJax support into any generated HTML file.  The following
 * constant tells us what script code to insert in order to do so.
 */
const MathJaxCode = `
    <script>
        MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] } };
    </script>
    <script id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
    </script>
`

/*
 * Apply the function above to all HTML files in a given directory, which we
 * assume is a directory of HTML files produced by jsDoc.  Consequently, we skip
 * all files that end with `.js.html`, since they are not documentation proper.
 * The given folder should be an absolute path.  The `.html` files in it are
 * modified in place in the filesystem.
 */
export const addMathJaxToFolder = async path =>
	readdir( path ).then( files =>
		Promise.all(
            files.filter( file =>
                file.endsWith( '.html' ) && !file.endsWith( '.js.html' )
		    ).map( async file => {
                const fileAbsPath = join( path, file )
                const contents = await readFile( fileAbsPath )
                writeFile( fileAbsPath, String( contents ).replace(
                    '</head>', () => MathJaxCode + '</head>' ) )
            } )
        )
	)
