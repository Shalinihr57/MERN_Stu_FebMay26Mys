//Introduction to callback function
function primaryFun(name,callback){
    console.log("Hello ,"+name);
// The callback function is executed only after the
//execution of the current function
    callback();
}
function showCompletionMessage(){
    console.log("The greeting task is complete.");
}
primaryFun("Ranjith",showCompletionMessage);