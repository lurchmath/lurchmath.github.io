
/*
 * The contents of this file were copied from the instructions here:
 * https://squidfunk.github.io/mkdocs-material/reference/math/
 */

window.MathJax = {
    tex: {
        inlineMath: [ [ "\\(", "\\)" ] ],
        displayMath: [ [ "\\[", "\\]" ] ],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex"
    }
}

// document$.subscribe( () => { 
//     MathJax.startup.output.clearCache()
//     MathJax.typesetClear()
//     MathJax.texReset()
//     MathJax.typesetPromise()
// } )
