// code and comments pulled from Udacity JS Design Patterns, L1, taught by the Bentastic Ben Jaffe 
// url: https://www.udacity.com/course/viewer#!/c-ud989/l-3417188540/m-3480348671 

// clear the screen for testing
document.body.innerHTML = '';
document.body.style.background="white";

var nums = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i]; // this var keeps changing every time we iterate

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', function() {
        alert(num);
    });

    // finally, let's add this element to the document
    document.body.appendChild(elem);
};

// If you run the above code on any website, it will clear everything and add a bunch of numbers to the page. 
// Try it! Open a new page, open the console, and run the above code. 
// Then click on the numbers and see what gets alerted. 
// Reading the code, we'd expect the numbers to alert their values when we click on them.
// But when we test it, all the elements alert the same thing: the last number. But why?

var nums = [1,2,3];

for (var i = 0; i < nums.length; i++) {

    var num = nums[i]; // this var keeps changing every time we iterate

    // On click... 
    elem.addEventListener('click', function() {
        // alert num's value at the moment of the click 
        alert(num);
        // Specifically, we're alerting the num variable 
        // that's defined outside of this inner function.
        // Each of these inner functions are pointing to the
        // same `num` variable... the one that changes on
        // each iteration, and which equals 3 at the end of 
        // the for loop.  Whenever the anonymous function is
        // called on the click event, the function will
        //  reference the same `num` (which now equals 3).
    });
};

// How do we fix this? 
// We need to use a closure to hold the value of num at the _exact moment_ we add the event listener 

// ---------- my code under here ----------- 

// create a function to serve as our closure
// this function will be invoked at the moment of each click (passing in (num) as its argument) 
// this function will take in a numCopy parameter that captures the value of the num at the moment of the click
var outerFcn = function(numCopy) {
    // this outerFcn will itself return an inner function to the event listener
    return function() {
        alert(numCopy);
    };
};

// now write the on click behavior, same as before, but with the outerFcn passed in and invoked with (num)
elem.addEventListener('click', outerFcn(num));

// finally, replace this line in the original code! 
document.body.innerHTML = '';
document.body.style.background="white";

var nums = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    var num = nums[i]; 

    var elem = document.createElement('div');
    elem.textContent = num;

    // add the outer function
    var outerFcn = function(numCopy) { 
        return function() {
            alert(numCopy);
        };
    };

    // this is the line we swapped
    elem.addEventListener('click', outerFcn(num));

    document.body.appendChild(elem);
};



