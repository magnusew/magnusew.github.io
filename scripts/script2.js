
let menuListDiv = document.getElementById("menuList");
let counter = 1;

let button = document.createElement("button");
button.innerText = " NOPE # " + counter;
button.setAttribute("id", 'randomButton');
button.className= "spamButton";

menuListDiv.appendChild(button);


button.addEventListener('mouseover', function()
{
    var randomX = Math.random() * (window.innerWidth - button.offsetWidth);
    var randomY = Math.random() * (window.innerHeight - button.offsetHeight);

    // Set button's new position
    button.style.position = 'absolute';
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
    counter++;
    button.innerText = " NOPE # " + counter;
    
    if(counter % 3 === 0)
    {
        let imageElement = document.createElement("img");
        imageElement.src = "https://media.tenor.com/olTVP9rBLuoAAAAM/you-naughty-naughty-pointing.gif";
        let imgContainer = document.getElementById("imageContainer");
        imgContainer.append(imageElement);
    }
    
})








