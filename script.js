//html element and selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let userInput;

//declare variable for ghost image
let ghostimage = document.querySelector(".ghost-image");

//declare variables for all of the buttons
let hideme = document.querySelector(".hide-button");; 
let showme = document.querySelector(".show-button");;
let updateimage = document.querySelector(".update-img-button");;
let sendmessage = document.querySelector(".message-button");;
let nameme = document.querySelector(".name-button");;

//create an onclick event for the Hide Me button
/*hide button variable*/hideme.onclick = (function (){  
  ghostimage.style.display = "none";
});

//create an onclick event for the Show Me button

showme.onclick = (function (){  
  ghostimage.style.display = "inline";
});

//create an onclick event for the Update Img button

updateimage.onclick = (function (){
  ghostimage.src = "https://static.vecteezy.com/system/resources/previews/011/148/866/original/cartoon-halloween-ghost-free-png.png"
}
});

//create an onclick event for the Send Message button
//update the userInput variable by saving the value of the input
//use the insertAdjacentHTML method to append the userInput in a <p> tag



//create an onclick event for the Name Me button
//update the userInput variable by saving the value of the input
//use the innerHTML method to update the h1 tag
