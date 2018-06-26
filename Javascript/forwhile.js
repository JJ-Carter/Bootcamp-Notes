// While loop
console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");
var counter = -10;

while(counter < 20){
  console.log(counter);
  counter++;
}

console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 AND 40");
var counter = 10;

while(counter < 40){
  console.log(counter);
  counter+=2;
}

//while(counter <= 40){
//  if(counter % 2 === 0){
//    console.log(counter);
//  }
//  counter+=1;
//}

console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");
var counter = 3000;

while(counter <= 333){
  if(counter % 2 !== 0){
    console.log(counter);
  }
  counter+=1;
}

console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
var counter = 5;

while(counter <= 50){
  if(counter % 5 === 0 && counter % 3 === 0){
    console.log(counter);
  }
  counter+=1;
}

// For loop

console.log("Print all numbers between -10 and 19");

for(i = -10; i <= 19; i++) {
  console.log(i);
}

console.log("Print all even numbers between 10 and 40");

for(i = 10; i <= 40; i+= 2) {
  console.log(i);
}

//for(i = 13; i <= 40; i+=1){
//  if(i %2 === 0){
//    console.log(i);
//  }
//}

console.log("Print all odd numbers between 300 and 330");

for(i = 300; i <= 330; i+= 1) {
  if(i % 2 !== 0){
    console.log(i);
  }
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");

for(i = 5; i <= 50; i+= 1) {
  if(counter % 5 === 0 && counter % 3 === 0){
    console.log(i);
  }
}
