// cat clicker project 
// The application should display a picture of a cat and a number of clicks
// The number of clicks should increment when the cat picture is clicked

// var catClicker;
// Create a button
// var btn = document.createElement("button");
// var clickOnMeow = document.createTextNode("Click on MEOW");
// btn.appendChild(clickOnMeow);

// If you're writing Cat Clicker with vanilla JS (no jQuery), you'll be adding the "click" event with elem.addEventListener()
var catImg = document.getElementById('cat-img');
var catCount = document.getElementById('cat-count');

var counter = 0;
var catIncrementer = function(){
	counter++;
	catCount.innerText = counter;
};

catImg.addEventListener('click', catIncrementer, false);
