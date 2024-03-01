
let menuListDiv = document.getElementById("menuList");
let counter = 1;

let button = document.createElement("button");

button.innerText = " Button # " + counter;
button.className = "spamButton";
menuListDiv.appendChild(button);


let imageElement = document.createElement("img");
imageElement.src = "https://media.tenor.com/olTVP9rBLuoAAAAM/you-naughty-naughty-pointing.gif";

let imgContainer = document.getElementById("imageContainer");


button.addEventListener('click', function(event){
    counter++;
    let newButton = document.createElement("button");
    newButton.innerText = " Button # " + counter;
    newButton.className = "spamButton";
    menuListDiv.appendChild(newButton);
    if(counter === 69)
    {    
        imgContainer.appendChild(imageElement);
    }
});







