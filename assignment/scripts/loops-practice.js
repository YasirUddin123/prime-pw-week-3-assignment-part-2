console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// make sure index is initialized at 0

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
// You have to change i < 4 to i < 6 in the example loop.
for(let i = 0; i < 6; i++){
  console.log(i);
}

//make sure condition is less than 6, not 5

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
// You have to change i = 0 to i = 3 AND change i < 4 to i < 6.
for(let i = 3; i < 6; i++){
  console.log(i);
}

// make sure index is initialized to 3

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
// You have to change i = 0 to i = 2, change i < 4 to i < 11, and change i++ to i+= 2.
for(let i = 2; i < 11; i+=2){
  console.log(i);
}

// Referenced Stackoverflow --> https://stackoverflow.com/questions/12809776/can-a-for-loop-increment-decrement-by-more-than-one
// make sure index is initialized to 2

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for(let i = 5; i > -1; i--){
  console.log(i);
}

// make sure condition is greater than -1

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for(star of stars){
  console.log(star);
}

// make sure not to confuse star with stars


// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let i = 0
while(i < stars.length){
  console.log(stars[i]);
  i++;
}

// initialize i = 0 before and outside of the while loop


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let j = 0;
while(j < 6){
  console.log(j);
  j++;
}

// found that it works to use initialize with a letter other than 'i'

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let k = 10;
while (k > 4){
  console.log(k);
  k--;
}

// make sure the count decrements by one with '--'

// assignment ready for submission
