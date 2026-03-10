// innerText & textContent
// innerText: visible rendered text only
// tectContent: all text nodes regardless of css
// InnerHTML: it allows reading or writing HTML markup inside an element

const message = document.getElementById("message");
const textContent = document.getElementById("textContentBtn");
const reset = document.getElementById("resetBtn");

//innerText
document.getElementById("innerTxtBtn").addEventListener("click",function(){
    message.innerText = "updated using innerText";
});
//textContent
document.getElementById("textContentBtn").addEventListener("click",function(){
    message.textContent = "updated using textContentBtn";
});
//reset
document.getElementById("resetBtn").addEventListener("click",function(){
    message.innerText = "original Message";
});
//innerHTML
const box = document.getElementById("box");
document.getElementById("innerHTMLBtn").addEventListener("click",function(){
    box.innerHTML = "<strong>original</strong> Message";
});

