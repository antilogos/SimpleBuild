# SimpleBuild

Display build easily using RePoE and Horadric-helper
Use to store some friends builds and myself, mainly my guide for "first character".

How: 
* read a pob code (which is just a compressed XML object) and transform it into a JavaScript object
* parse this object to create a reference of all relevant object for Horadric Helper
* complete the reference of gem with data from RePoE so they are displayed with stats
* complete the reference of passive with data from official json tree so they are displayed with stats
* modified dom to display all gems, items, passive on the page (skill tree is build as an svg)
* save build to display them by storing them in a js file with meta-field, no publication mechanism

TODO:
* better search page for saved build
* add support for french, and maybe other language?
* see if there is api for a passive skill tree in json preventing copy-paste each league
* find out why there is no description for support gem
* add roadmap of gems
* see where and how image for items can be found and displayed
* see if possible to read a pastebin page (cors shenanigans)
* separate page construction and navigation from the main html
* see if possible to read an account from official website

# Files

* ListBuild.js
Used to store builds to display on the search page, just flat pob code with some additional meta-field.

* PobParser.js
Just decrompress the XML pob code and transform relevant points into a JsObject.

* Repoe.js
Import all files needed for gem stats from RePoE.

* TreeParser.js
Read the json passive skill tree data and build a svg image. Can also add a path over it from a character's passive skill tree to visualize it.

* HoradricLoader.js
Used to transform the jsobject of a pob into horadric-helper datas. Need the stats of the gems from RePoE and the passive skill tree data.

* style.css
Stylesheet

* test.html
Entry and global layout of the page.

# Halted files

* GemReward.js
Attempt to display which gems are available or not for the current class.

* WheelOfBuild.js
Halted project of displaying random build recommendation.
