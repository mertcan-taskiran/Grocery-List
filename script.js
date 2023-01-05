const clear = document.getElementById("clear");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

clear.addEventListener("click", function(){
    allItems.innerHTML = "";
});

userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
        addItem();
});

function addItem(){
    var p = document.createElement("p");
    p.innerHTML = '- ' + userInput.value;

    p.addEventListener("click", function(){
        p.style.textDecoration = "line-through";
    });

    allItems.insertAdjacentElement("beforeend", p);

    userInput.value ="";
}