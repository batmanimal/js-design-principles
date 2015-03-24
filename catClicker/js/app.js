// cat clicker project 
// The application should display a picture of a cat and a number of clicks
// The number of clicks should increment when the cat picture is clicked
// If you're writing Cat Clicker with vanilla JS (no jQuery), you'll be adding the "click" event with elem.addEventListener()
var catName = "fluffy";
document.getElementById('cat-name').innerHTML = catName;
var catImg = document.getElementById('cat-img');
var catCount = document.getElementById('cat-count');

// now they want two cats! 
var twinCatName = "buffy";
document.getElementById('twincat-name').innerHTML = twinCatName;
var twinCatImg = document.getElementById('twincat-img');
var twinCatCount = document.getElementById('twincat-count');

// function that increments and stores the click count 
var counter = 0;
var catIncrementer = function(){
	counter++;
	catCount.innerText = counter;
};

var twinCounter = 0;
var twinCatIncrementer = function(){
	twinCounter++;
	twinCatCount.innerText = twinCounter;
};

// call the incrementer functions on each cat image, on the event type 'click'
catImg.addEventListener('click', catIncrementer, false);
twinCatImg.addEventListener('click', twinCatIncrementer, false);

