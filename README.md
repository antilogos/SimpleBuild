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
* 🔧 see if possible to read an account from official website and support it

# Files

* PobParser.js
Just decrompress the XML pob code and transform relevant points into a JsObject.

* Repoe.js
Import all files needed for gem stats from RePoE.

* TreeParser.js
Read the json passive skill tree data and build a svg image. Can also add a path over it from a character's passive skill tree to visualize it.

* HoradricLoader.js
Used to transform the jsobject of a pob into horadric-helper datas. Need the stats of the gems from RePoE and the passive skill tree data.

* Dat_Item.js
Reference to name and icon for all items (except gems, only has basic item for now).

* GemReward.js
Which gems are available or not for the current class (also translation of gem names).

* Lang.js
Multilang support (EN and FR for now).

* ListBuild.js
Used to store builds to display on the search page, just flat pob code with some additional meta-field.

* style.css
Stylesheet for everything.

* test.html
Entry and global layout of the page.

# Other files

* tutorialTreeRedirect.html
Used for my "first character series", enable to link easily the lastest tree (bound to disapear one day)

* passiveTreeToSvg.html
Used for my "first character series", enable to display the passive tree with different sections (bound to disapear one day)

# Halted files

* WheelOfBuild.js
Halted project of displaying random build recommendation as a challenge.
