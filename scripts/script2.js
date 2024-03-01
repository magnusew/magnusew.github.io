
let menuListDiv = document.getElementById("menuList");
let counter = 1;

let button = document.createElement("button");

button.innerText = " Button # " + counter;
button.className = "spamButton";
menuListDiv.appendChild(button);


button.addEventListener('click', function(event){
    counter++;
    let newButton = document.createElement("button");
    newButton.innerText = " Button # " + counter;
    newButton.className = "spamButton";
    menuListDiv.appendChild(newButton);
});




