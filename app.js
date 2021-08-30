//happy number
//step 1: do check to see if number is a positive or negative number,set all neg numbers to sad by default using edge cases.
//step 2: write function to do math, with an exit strategy for when the number reaches 0 or a negative.
//step 3: make this into a  while loop, with the break condition being when the number reaches 1, 0, or negative.
//step 4: make variable to store value
//step 5: pass in number as a paramater
// step 6: set a variable to a boolean value this should help to exit our while loop
// step 7: to get last digit, divide number using mod 10. Use math.floor for first digit. 13 becomes 13 % 10 = 3, and math.floor(13/10) = 1. math.floor  erases decimals

// to square a number, 2 ** 5 is an example, double **

// 13 = 1 + 3 ,with each number squared which equals 1 + 0, which when squared equals 1(happy number)

// function squareNumber(number) {
//
//   //what if number is 1 digit or more than 3?
//   let num1 = number % 10;
//   let num2 = Math.floor(number / 10);
//
// }
//
//
// function happyNumber(number) {
//   let happyNumber;
//   let happy = false;
//   let sad = false;
//
//   if ( number < 1) {
//     sad = true;
//     console.log("Number is a sad number")
//     return sad;
//   }
//   while (number > 1) {
//     squareNumber()
//   }
// }
//
// happyNumber(13);

//prime numbers are only divisible by itself, and 1. So 25 is not a prime number(divisible by 5),7 is a prime number as 1 and 7 are divisible by it.
// we need to iterate through a lot of numbers, a FOR loop would be great for this. (let i = 0; i < 101, i++).
//need a 2nd forloop i am thinking
// will need to break out of 2nd for loop otherwise it keeps running forever
// 2 is the only even prime, which makes this problem super easy to solve!
//let set a variable, isPrime and set it to = false;this will help to console.log things later
//having issue with 2 being divided by itself


//
// function primeNumber(){
//   let isPrime=false;
//   primeNumbersArray = [2];
//   for(let i = 1; i < 101; i++) {
//     for( let j = 2; j < i; j++) {
//       if(i % j === 0 ) {
//         isPrime = false;
//         break;
//       }
//       else {
//         isPrime = true;
//       }
//     }
//     if(isPrime === true) {
//       primeNumbersArray.push(i);
//     }
//   }
//   console.log(primeNumbersArray);
// }
//
// primeNumber();

//Fibonnacci number which is equal to the two numbers that proceed it

// need to start at 1
//1,1,2,3,5,8,13,21,34,

// so we always add the current number with what proceeds before it
//make an array
//double for loop so that we can compare and add values
// pass in two parameters,   a start point and an end point

//let make 2 variables, one to hold prev number and one to hold current
//then we add the two numbers to get next iteration

// function fibonacciNumber(minNumber, maxNumber) {
//
//   let prevNumber = 1;
//   let nextNumber = 1;
//   let fibNumber = 0;
//
//   for (let i = 1; i <= maxNumber; i++){
//       fibNumber = prevNumber + nextNumber;
//       console.log(fibNumber);
//       prevNumber = fibNumber + nextNumber;
//       console.log(prevNumber)
//       nextNumber = fibNumber + prevNumber;
//       console.log(nextNumber);
//   }
// }
//
// fibonacciNumber(1,3);

