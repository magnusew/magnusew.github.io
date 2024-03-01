
let menuListDiv = document.getElementById("menuList");
let counter = 1;

let button = document.createElement("button");

button.innerText = " Button # " + counter;
button.className = "spamButton";
menuListDiv.appendChild(button);

let imageElement = document.createElement("img");
let imgContainer = document.getElementById("imageContainer");


button.addEventListener('click', function(event){
    counter++;
    let newButton = document.createElement("button");
    newButton.innerText = " Button # " + counter;
    newButton.className = "spamButton";
    menuListDiv.appendChild(newButton);
    if(counter === 4)
    {
        imageElement.src = "/image/naughty.jpg";
        /*document.body.style.background = "imageElement";*/

    }
});

imgContainer.appendChild(imageElement);





