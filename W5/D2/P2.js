//Basic callback variations
//1. a callback with no input data
//2. a callback that recieves data from main function

function runTask(callback){
    console.log("Task is running.");
    callback(); 
}

function runTaskWithResult(taskName,callback){
    console.log("processing task: ",taskName);
    callback("Task "+taskName+" finished successfully.");
}

function showSimpleDoneMessage(){
    console.log("simple callback executed");
}

function showDetailedMessage(message){
    console.log(message);
}

// runTask(showSimpleDoneMessage);
runTaskWithResult("Send monthly report",showDetailedMessage);