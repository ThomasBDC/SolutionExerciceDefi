const messageBlock = document.getElementById("messageBlock");
const message1 = document.getElementById("message1");
const pseudo1 = document.getElementById("pseudo1");

const message2 = document.getElementById("message2");
const pseudo2 = document.getElementById("pseudo2");

document.getElementById("SendMessage1").addEventListener("click", 
function(){
    messageBlock.innerHTML += `${pseudo1.value} : ${message1.value} <br/>`;
});

document.getElementById("SendMessage2").addEventListener("click", function(){
    messageBlock.innerHTML += `${pseudo2.value} : ${message2.value} <br/>`;
});

document.getElementById("refreshMessages").addEventListener("click", function() {
    messageBlock.innerHTML = "";
})

document.getElementById("stop").addEventListener("click", function(){
    document.getElementById("SendMessage2").setAttribute("disabled", "disabled");
})