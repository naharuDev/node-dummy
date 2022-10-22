// npm - global command, comes with node
// npm -- version

// local dependency - use it only in this particular project
// npm i <packagName>

//global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
// manual approch (create package.json in root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everyting default)


const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)