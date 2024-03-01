let buttons = document.body.getElementsByClassName("b1")
// Set initial background color

mouseOverByClass(buttons);


function mouseOverByClass(thisClass) 

{
    for(let i = 0; i < thisClass.length; i++)
{
    // Add event listener for mouseover
    thisClass[i].addEventListener('mouseover', function(event){
    thisClass[i].style.backgroundColor = "grey";
});

    // Add event listener for mouseout
    thisClass[i].addEventListener('mouseout', function(event){
    thisClass[i].style.backgroundColor = "white";
});
       
}
}
