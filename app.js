// npm install lodash

// ha egy újabb verzió kell mindig a package.json-ben
// depenciesben oda kell rakni a "^" karaktert a verzió elé
var _ = require("lodash")
var example = _.fill([1, 2, 3, 4, 5], "banana", 1, 4);
console.log(example)
// npm uninstall lodash