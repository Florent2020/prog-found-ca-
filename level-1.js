// 1. Declare and initialise a variable with a string value.

var school = "Noroff";




// 2. Create an object variable called person and give it two properties (a key and a value) of your choice.

var person = {
    name: "Florent", // name is the key, "Florent" is the value, a string value
    married: true, // married ia the key, true is the value, a boolean value 
};




/* 3. Create a variable called outOfStock and assign it a boolean value.
      Create an if else statement that checks the value of outOfStock.
      If it is true, console log "Out of stock". Otherwise log "In stock". */

var outOfStock = true;

if (outOfStock === true) {
    console.log("outOfStock");
} else {
    console.log("In stock");
};






/* 4. Create an array of five numbers.
      Loop through the array and console log each value. */

var myNumbers = [7, 9, 19, 84, 1984];

for (var i = 0; i < myNumbers.length; i++) {
    console.log(myNumbers[i]);
};





// 5. Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.

for (var i = 15; i <= 25; i++) {
    console.log(i);
};





// 6. Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.

if (i === 20) {
    console.log(i);
};





/* 7. Create an array of two objects. Each object must have the same three properties (with different values):
      - one property with a string value
      - one property with a number value
      - one property with a boolean value
      Loop through the array and console log the number value and the boolean value. */


var animals = [{
        colour: "cream", // colour is the key, "cream" is the value, a string value
        age: 3, // age is the key, 3 is the value, a number value
        cat: true, // cat is the key, true is the value, a boolean value
    },
    {
        colour: "brown", // colour is the key, "brown" is the value, a string value
        age: 2, // age is the key, 2 is the value, a number value
        cat: false, // cat is the key, false is the value, a boolean value
    }
];

for (var i = 0; i < animals.length; i++) {
    console.log(animals[i].age);
    console.log(animals[i].cat);
};





/* 8. Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
      Inside the function, log the string "I don't like " together with the argument.
      Call the function and pass in a value of your choice. */

function whatIDontLike(virus) {
    console.log("I don't like " + virus);
};

whatIDontLike("CoronaVirus");





/* 9. Create a function that accepts two arguments.
      Inside the function, subtract the second argument from the first and console log the result. */

function myNumbers(five, seven) {
    var sum = seven - five;
    console.log(sum);
}

myNumbers(5, 7);





/* 10. Create an empty array.
       Create a function that accepts one argument.
       Inside the function, add the argument to the array.
       Call the function and pass in a value of any type. */

var myArray = [];

function myFunction(argumentFunction) {
    console.log(argumentFunction);
    myArray.push(argumentFunction);
};

myFunction("earth");
