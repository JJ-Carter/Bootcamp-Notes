// PrintReverse() //

/* Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse
   order(don't actually reverse the array itself).
*/

// printReverse([1, 2, 3, 4]);
var orgArr = [1, 2, 3, 4];

function printReverse(arr) {
  var newArr = arr.slice();
  revArr = newArr.reverse();
  console.log(revArr);
}

printReverse(orgArr);

// ANSWER //
function printReverse(arr) {
  for(var i = arr.length -1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([3,6,2,5])
// ANSWER /








// isUniform() //

/* Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical */

// isUniform([1, 1, 1, 1]); // true
// isUniform([2, 1, 1, 1]); // false

var uniform = [1, 1, 1, 1];

function isUniform(uniform) {
  len = uniform.length;
  var num = uniform[0];
  
  for(i = 1; i < len; i++) {
    if(uniform[i] == num) {
      console.log("true")
    } else {
      console.log("false")
    }
  }
}

// ANSWER //
function isUniform(arr) {
  var first = arr[0];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] !== first) {
      return false;
    }
  }
  return true;
}

// ANSWER //






// sumArray() //

/* Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array */
// sumArray([1, 2, 3[); //6
/*
var sum = [1, 2, 3, 5];

function sumArray(num) {
  len = num.length
  //var total = sum[0] + sum[1] + sum[3];
  
  for(i = 0; i < len; i++) {
    var total = num[i];
    var comp = total + total;
    //console.log(num);
  }

  console.log(comp);
  
}

var sum = [1, 2, 3, 5];

function sumArray(num) {
  num.forEach(function(element) {
    console.log(element[1])
  });
}
*/
var sum = [1, 2, 3, 5]

function sumArray(num)
  console.log(num.reduse(reducer));
}

// ANSWER //

function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total;
}

// ANSWER










// max() //

/* Write a function max() that accepts an array of numbers and returns the maximum number in the array */

//max([1, 2, 3]); //3

var num = [1, 2, 3];

function max(arr) {
  console.log(Math.max(...arr));
}


// ANSWER //

function max(arr) {
  var max = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// ANSWER //
























