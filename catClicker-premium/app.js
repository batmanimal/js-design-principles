
// list of 5 cats with names
// clicking on a cat name displays stuff in the display area

// display cat image in display area
// display cat name
// display counter with number of clicks for each cat

// make a cat object
function Cat(name, image, counter) {
	this.name = name;
	this.image = image;
	this.counter = counter;
}; 



var cat1 = new Cat("buffy", "images/cat1.jpg", 2);
console.log(cat1);


// create a function that takes in cat object and does stuff 
