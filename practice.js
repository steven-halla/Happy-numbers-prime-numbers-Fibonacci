// may not use the same input twice so no doubling numbers

// for this problem we need to add two elements of an index

// retrieve two elements from an array and then add

// make two params

// use for loop to go through each iteragtion. Since we are comparing two elements in an array we need  a double for loop

// array i and array j should equeal the target

//1

// function returnIndex(target, array) {
//   for ( let i = 0; i < array.length; i++){
//     for (let j = 0; j < array.length; j++){
//       if(array[i] + array[j] == target) {
//         console.log( [i, j]);
//         return;
//       }
//     }
//   }
// }
//
// returnIndex(55, [5,17,77,50]);

// To get rid of all the empty spaces, we will use the regex method.
// string.replace(" ", "");


//incomplete
// function isPalindrome(string) {
//
//   const length = string.length;
//   for ( let i = 0; i < length / 2; i++) {
//     if (string[i] !== string[length - 1 - i]) {
//
//       console.log("String is not a palindrome");
//       break;
//     }else {
//       console.log("String is a palindrome");
//       break;
//     }
//   }
//   console.log(string);
// }
//
// isPalindrome("non non ");


// create boolean value and set the default to false
// Need to do a check to make sure all the numbers are in sequence
// to solve this, lets put all the numbers in numeric order
// lets do a loop to put all numbers in our array in order
// lets use the sort method first to sort the array

// then we go through the new array and compare, if a number is less than 1 of current number

// function sortArray(array) {
//   array.sort();
//   for( let i = 0; i < array.length; i++){
//     if(array[i] === array[1] - 1) {
//       console.log(true);
//       break;
//     }
//     else if(false);
//     console.log(false);
//     break;
//   }
// }
//
// sortArray([17, 15, 20, 19, 21, 16, 18);


//make an array that contains pos and neg numbers.
// return an array with two numbers, the sum of all positive numbers, and the sum of all negative numbers.
// if num is greater than 0, push to variable.
// if num is less than 0, push to other variable
// push both variables to a new array
// make for loop to go through entire array

// function posNegativeSums(array) {
//   let positiveNumber = [];
//   let negativeNumber = [];
//   let negativeSum = 0;
//   let negPosNumbers = [];
//   let positiveCount = 0;
//
//   for (let i = 0; i < array.length; i++){
//     if (array[i] < 0){
//       negativeNumber.push(array[i]);
//     }else {
//       positiveNumber.push(array[i]);
//     }
//   }
//   console.log(positiveNumber);
//   console.log(negativeNumber);
//   for (let j = 0; j < negativeNumber.length; j++) {
//      negativeSum += negativeNumber[j];
//
//   }
//   console.log(negativeSum);
//   for (let k = 0; k < positiveNumber.length; k++) {
//     positiveCount += 1;
//
//   }
//   console.log(positiveCount);
// }
//
// posNegativeSums( [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21]);

// we need to convert a string to a number element
//each number should then be pushed to an empty array(maybe)
//put the highest and lowest number as a string
//create variable and set to 0. lets use a nested for loop.

// function stringToNumber(string) {
//   let nums = string.split(" ");
//   let maxNums = Math.max.apply(null, nums);
//   let minNums = Math.min.apply(null, nums);
//   console.log(minNums);
//   console.log(maxNums);
//
// }
//
// stringToNumber("3 9 0 1 4 8 10 2" );

// lets check an email address to see if its valid
// checks we need to make:
// @ .com
// also need at least 3 letters after @ for a valid email
// we also need text before the "and"

// we need to do boolen checks
//incomplete
// function isEmailValid(string) {
//   let hasAT = false;
//   let hasDotCom = false;
//
//   let hasText = false;
//   let hasDomain = false;
//
//
//
//   for(let i = 0; i < string.length; i++) {
//     if ( "m" === string[string.length - 1] && "o" === string[string.length -2] && "c" === string[string.length -3] && "." === string[string.length -4] ){
//
//       console.log("valid check");
//       break;
//     }
//   }
// }
//
// isEmailValid("@gmail.com");

// take in a string and replace it with a number that corresponds with its place in the alpha bet
// make for loop to iterate thrhough each character of the stirng


// function abcToNumber(string) {
//   let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//   let position = " ";
//   for (let i = 0; i < string.length; i++) {
//     for(let j = 0; j < alphabet.length; j++) {
//       if (string[i] === alphabet[j] ){
//         position += alphabet.indexOf(string[i]) + 1 + " " ;
//       }
//     }
//   }
//   console.log(position);
// }
//
// abcToNumber("abcz");



// rolling the lock forward or back could be going forward and back on an array.
// 10 digit combo lock with 4 numbers
// make two variables, one going up, and one going down,
//have 2 params, current, and target
// each time that you go up, add + 1 to up param,
//each time that you do down, add + 1 to down param,
// add both values at the end  and add to a variable of total sum of turns.
// do a nested for loop

// I need to put numbers in an array with many elements, so in this case, 2 arrays, 4 elements each


// function leonBriefCase(current, target) {
//   let upCount = 0;
//   let downCount = 0;
//   let totalClicks = 0;
//
//   for ( let i = 0; i < current.length; i++) {
//     for ( let j = 0; j < target.length; j++) {
//         if(current[i] <  target[j]){
//           upCount += 1;
//           current[i] = current[i] + upCount;
//           console.log(upCount)
//           console.log(current);
//           break;
//         }else if(current[i] > target[j]) {
//           downCount += 1;
//         }
//     }
//   }
// }
//
// leonBriefCase(3893, 5296);

//need to split the number into 2 seperete number
// add  a / in between the two numbers
// put number in an array
// seperate number into two number so array has two elements
//
//
// function divideNumbers(number) {
//   let array = [];
//   let reverseArray = [];
//   array.push(number);
//
//   let newArray = String(number).split("").map((num) => {
//     return Number(num);
//   })
// console.log(newArray);
//   reverseArray.push(newArray[1]);
//   console.log(reverseArray);
//   reverseArray.push(newArray[0]);
//   console.log(reverseArray);
//   let newNumber = array[0] + array[1];
//   console.log(newNumber);
// }
//
// divideNumbers(17);


