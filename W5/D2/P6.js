//callback nesting
console.log("starting nested callback flow");

setTimeout(function(){
    console.log("Step1: user loaded.");

    setTimeout(function(){
        console.log("Step2: orders loaded.");

        setTimeout(function(){
            console.log("Step3: payments loaded.");

            setTimeout(function(){
                console.log("Step4: shipment loaded.");
                console.log("we are in callback hell!!");
            },1000);
        },800);
    },600);
},400);