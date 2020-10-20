const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

var text = process.argv[2];
var langCode = franc(text);
var lang = langs.where("3", langCode);

try{
    console.log(lang.name.rainbow);
} catch(e){
    console.log("Undetermined. Please give more sample");
}