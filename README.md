
# Documentation for the Lurch project

View it online [here](https://lurchmath.github.io).

Structure of this repository:

 - `docs/` folder: Where the Markdown source files for the website reside.
 - `site/` folder: The compiled output of those Markdown source files is placed
   into this folder as a static HTML site, and this is what users see online.
 - `apidocs/` folder: Contains HTML pages documenting our source code, which
   lives in [another repository](https://github.com/lurchmath/lurch)
    - `apidocs/core/` documents the foundational classes for the project
    - `apidocs/engine/` documents the validation algorithm
    - `apidocs/app/` documents the code for the user interface
 - `build-docs/` folder: Contains scripts that can be run from the command line
   to rebuild the contents of the `apidocs/` folder (and all subfolders)
 - `index.html` file: A simple HTTP redirect that sends anyone who visits
   [lurchmath.github.io](http://lurchmath.github.io) immediately into the site
   subfolder at [lurchmath.github.io/site](http://lurchmath.github.io/site).
