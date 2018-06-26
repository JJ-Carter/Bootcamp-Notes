// Arrays and Array methods Push, Pop, Unshift, Shift, indexOf(), Slice

var friends = ["Charlie", "Liz", "David", "mattias"];

console.log(friends[0]) //"charlie"

friends[1] + " <3 " + friends[2] //"Liz <3 David"

// Update data in array
var friends = ["Charlie", "Liz", "David", "mattias"];

friends[0] = "Chuck";
friends[1] = "Lizzie";

// Add new data to array
var friends = ["Charlie", "Liz", "David", "mattias"];
friends[4] = "Amelie";

// We can initialize an empty array two ways:
var friends = []; //no friends :(
var friends = new Array() //uncommon

// Arrays can hold and type of data
var random_collection = [49, true, "Hermione", null];

// Arrays have a lenght property
var nums = [45, 37, 89, 24];
nums.length //4

// Array use push to add to the end of an array
var colors = ["red", "orange", "yellow"];
colors.push("green"); // ["red", "orange", "yellow", "green"]

// Array use pop to remove the last item in an array
var colors = ["red", "orange", "yellow"];
colors.pop(); //removes yellow

// pop() returns the removed element
var col = colors.pop(); //orange

// Array unshift to add to the front of an array
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared") // ["infrared", "red", "orange", "yellow"]

// Array shift to remove the first item in an array
var colors = ["red", "orange", "yellow"];
colors.shift(); // ["orange", "yellow"]

// Shift() also returns the removed element
var col = colors.shift(); // oragne

// indexOf() to find the index of an item in an array
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];

// Returns the first index at which a given element can be found
friends.indexOf("David"); // 2
friends.indexOf("Liz"); // 1, not 4

// Returns -1 if the element is not present.
friends.indexOf("Hagrid"); // -1

// Slice, slice() to copy parts of an array
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// Use slice to copy the 2nd and 3rd fruits
// Specify index where the new array starts(1) and ends (3)
var citrus = fruits.slice(1, 3); // ['Orange', 'Lemon']

// This does not alter the original fruits array
// Citrus contains ['Orange', 'Lemon']
// Fruits is unalter so it still contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']

// You can also use slice() to copy an entire array
var nums = [1, 2, 3,];
var otherNums = nums.slice(); // Both arrays are [1, 2, 3]

// Array exercise 1
var numbers = [22, 67, 33, 96, 88];

// What does the following line print?
console.log(numbers[numbers.length]) // Answer is Undefinded because the lenght is 5 but there is no index 5 only 0-4

// Array exercise 2
var friendGroups = [
  ["Harry", "Ron", "Hermione"],
  ["Malfoy", "Crabbe", "Goyle"],
  ["Mooney", "Wormtail", "Prongs"]
];

// What is the result of this line
console.log(friendGroups[2][0]); // Answer is Mooney


// Array Iteration //

// For loop - To loop over an array using a for loop, we need to make use of the arrays length property
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// ForEach - Javascript provides an easy built-in way of iterating over an array: ForEach
arr.forEach(someFunction)

var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color) { //color is a placeholder, call it whatever you want
  console.log(color);
});


// Array iteration exercise
// What does the following code print out?
var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color) {
  if(color % 3 === 0) {
    console.log(color);
  }
}); // Answer: [3, 6, 9]
