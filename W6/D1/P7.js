// understanding path module and JSON module

const path = require("path");
//JSON is loaded as a normal JS object in commonJS
const appConfig = require("./support/app-config.json");

console.log("__dirname", __dirname);
console.log("__filename", __filename);

console.log("Application Name:", appConfig.appName);
console.log("Environment:", appConfig.environment);
console.log("Features:", appConfig.features.join(", "));// adds all the elements of the array into string with a comma