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
* 🔧 find out how to extract data from the game files so we can get description for support gem, better translation support, and uptadable path to image
* lighter background image in mobile mode

UPDATE PROCESS:
* filling out new gems into Dat_GemReward.js with gem name and gem icon when available, same with unique?

# Files

* lib/FormFill.js
Construct all the divs elements to display a build.

* lib/HoradricLoader.js
Used to transform the JsObject of a pob into horadric-helper datas. Need the stats of the gems from RePoE and the passive skill tree data.

* lib/pako.min.js
Base64 decoder lib for js.

* lib/PobParser.js
Just decrompress the XML pob code and transform relevant points into a JsObject.

* lib/Repoe.js
Import all files needed for gem stats from RePoE.

* lib/SearchLoad.js
Construct all the divs elements to display the list of build, with history and filter function.

* lib/TreeParser.js
Read the json passive skill tree data and build a svg image. Can also add a path over it from a character's passive skill tree to visualize it.

* dat/Dat_GemReward.js
Reference to name and icon for all unique items and if and when gems are available for classes.

* dat/Dat_Item.js
Reference to name and icon for all non-gem base items.

* dat/Dat_Lang.js
Multilang support (EN and FR for now).

* dat/Dat_ListBuild.js
Used to store builds to display on the search page, just flat pob code with some additional meta-field.

* dat/Dat_UniqueItem.js
Reference to name and icon for all unique items.

* style.css
Stylesheet for everything.

* index.html
Entry and global layout of the page.

# Other files

* tutorialTreeRedirect.html
Used for my "first character series", enable to link easily the lastest tree (bound to disapear one day)

* passiveTreeToSvg.html
Used for my "first character series", enable to display the passive tree with different sections (bound to disapear one day)

# Halted files

* WheelOfBuild.js
Halted project of displaying random build recommendation as a challenge.
