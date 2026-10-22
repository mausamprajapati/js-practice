// logics buliding questions and js practice questions

// QUESTION 1: var vs let scope

console.log(a);
var a = 5;
console.log(b);
let b = 10;

// QUESTION 2. Write a block where var leaks out but let doesn't. Prove it with console.log.

{
  var x = 5;
  let y = 10;
}
console.log(x); // var leaks out of the block, so this will log 5
console.log(y); // let does not leak out of the block so this will throw a ReferenceError: y is not defined

// QUESTION 3. What's the output and why

console.log(1 + "2"); // "12" number 1 is converted to string and concatenated with "2"
console.log("5" - 3); // 2 "5" is converted to the number 5, then 3 is subtracted
console.log(true + 1); // 2 true is converted to the number 1, then added to 1
console.log(null + 1); // 1 null is converted to the number 0, then 1 is added
console.log(undefined + 1); // NaN undefined is converted to the number NaN, then added to 1

// QUESTION 4. What's the difference between == and ===? Write one example where they give different outputs.

// == checks for equal value but not type while === checks both value and type.

console.log(5 == "5"); // true
console.log(5 === "5"); // false

// QUESTION 5. What does typeof null return and why is it considered a bug?

// typeof null returns "object". This is considered a bug because null is not an object, but a primitive value that represents the absence of any object value.

// QUESTION 6. What's the output:

console.log(2 ** 10);  // 1024 2 raised to the power of 10
console.log(10 % 3);  // 1 10 divided by 3 leaves a remainder of 1
console.log(+"42");  // 42 the unary plus operator converts the string "42" to a number
console.log(+true);  // 1 the unary plus operator converts the boolean true to the number 1
console.log(+false);  // 0 the unary plus operator converts the boolean false to the number 0
console.log(+null);  // 0 the unary plus operator converts null to the number 0

// QUESTION 7. Write a function getGrade(score) that:
//   - Takes a student's marks (0 to 100)
//   - Returns the grade based on this logic:
//   90-100 A+
//   80-89 A
//   70-79 B
//   60-69 C
//   33-59 D
//   0-32 Fail
//   Anything else Invalid marks

function getGrade(score){
  if(score<0 || score>100) return "Invalid marks";
  if(score>=90) return "A+";
  if(score>=80) return "A";
  if(score>=70) return "B";
  if(score>=60) return "C";
  if(score>=33) return "D";
  return "Fail";
}
console.log(getGrade(2));

// QUESTION 8. Rock-Paper-Scissors logic

function getRps(user, computer){
  if(user !== "Rock" && user !== "Paper" && user !== "Scissor") return "Invalid input";
  if(computer !== "Rock" && computer !== "Paper" && computer !== "Scissor") return "Invalid input";
  if(user === "Rock" && computer === "Scissor") return `${user} User won`;
  if(user === "Paper" && computer === "Rock") return `${user} User won`;
  if(user === "Scissor" && computer === "Paper") return `${user} User won`;
  if(user === computer) return "Tied";
  return `${computer} Computer won`;
}
console.log(getRps("Rock", 234));

// QUESTION 9. Write a function getSignal(color) that:
// - "Red" → "Stop"
// - "Yellow" → "Get Ready"
// - "Green" → "Go"
// - Anything else → "Invalid signal"

function getSignal(color){
  if(color === "Red") return "stop";
  if(color === "Yellow") return "Get Ready";
  if(color === "Green") return "Go";
  return "Invalid signal"
}
console.log(getSignal("Red"));

// QUESTION 10. Write a function getBMI(weight, height) that:
// - Calculates BMI = weight / (height * height)
// - Below 18.5 → "Underweight"
// - 18.5 to 24.9 → "Normal"
// - 25 to 29.9 → "Overweight"
// - 30 and above → "Obese"
// - Negative values → "Invalid input"

function getBMI(weight, height){
  if(weight<=0 || height<=0) return "Invalid input";
  let BMI = weight / (height*height);
    if(BMI>=30) return `${BMI} Obese`;
    if(BMI>=25) return `${BMI} Overweight`;
    if(BMI>=18.5) return `${BMI} Normal`;
    return `${BMI} Underweight`;
}

console.log(getBMI(50, 1.71));

// QUESTION 11. Write a function getAgeGroup(age) that:
// - 0-12 → "Child"
// - 13-17 → "Teenager"
// - 18-64 → "Adult"
// - 65 and above → "Senior"
// - Negative → "Invalid age"

function getAgeGroup(age){
  if(age<0) return "Invalid age";
  if(age>=65) return "Senior";
  if(age>=18) return "Adult";
  if(age>=13) return "Teenager";
  if(age>=0) return "Child";
}

console.log(getAgeGroup(-10));

// QUESTION 12. Print numbers from 1 to 10 using for loop.

for(let i=1; i<=10; i++){
  console.log(i);
}

// QUESTION 13. Print numbers form 10 to 1 using while loop.
{
  let i=10;
  while(i>=1){
    console.log(i);
    i--;
  }
}

// QUESTION 14. Print even numbers from 1 to 20 using for loop.

for(let i=1; i<=20; i++){
  if(i%2 === 0){
    console.log(i);
  }
}

// QUESTION 15. Print odd numbers from 1 to 15 using while loop.
{
  let x = 1;
  while(x<=15){
    if(x%2 !== 0){
      console.log(x);
    }
    x++;
  }
}

// QUESTION 16. Print the multiplication table of 5.

for(let i=1; i<=10; i++){
  console.log(`5 x ${i} = ${5*i}`);
}

// QUESTION 17. Find the sum of numbers from 1 to 100 using a loop.

let sum = 0;
for(let i=1; i<=100; i++){
  sum = sum + i;
}
console.log(sum);

// QUESTION 18. Print all numbers between 1 to 50 that are divisible by 3.

for(let i=1; i<=50; i++){
  if(i%3 === 0){
    console.log(i);
  }
}

// QUESTION 19. Ask the user for a number and print whether each number from 1 to that number is even or odd.
{
  let num = +prompt("Please enter a number");
  function oddEve(num){
    if(isNaN(num) || num<=0) return "Invalid Input ? Please enter a valid number";

    for(let i = 1; i<=num; i++){
      if(i % 2 === 0) {
        console.log(`${i} is even`);
      }else{
        console.log(`${i} is odd`);
      }

    }
  }
  oddEve(num);
}
                                                      // or

let num = +prompt("Please enter a number");

for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}



// QUESTION 20. Ask the user for a number and print whether that number is even or odd.

{
  let num = +prompt("Please enter a number");
  function eveOdd(num){
    if(isNaN(num)) return "Invalid Input";
    if(num % 2 === 0){
      console.log(`${num} is even`);
    }else {
      console.log(`${num} is odd`);
    }
  }
  eveOdd(num);
}


// QUESTION 21. Count how many numbers between 1 to 100 are divisible by both 3 and 5.

let count = 0;
for(let i = 1; i<=100; i++){
  if(i % 3 === 0 && i % 5 === 0){
    count++;
  }
}
console.log(`${count}`);


// Question 22. Write a loop from 1 100 that:
// . Print each number
// . Stops completely when it finds the first number divisible by 7.

for(let i = 1; i <= 100; i++){
  if(i % 7 === 0){
    break;
  }
  console.log(i);
}


// QUESTION 23. Write a loop from 1 to 20 that:
// . Skips numbers divisible by 3
// . Prints all others

for(let i = 1; i <= 20; i++){
  if(i % 3 === 0){
    continue;
  }
  console.log(i);
}


// QUESTION 24. Write a loop from 1 to 100 that:
// . Prints only 5 odd numbers
// . Then stops the loop

{
  let count = 0;
  for(let i = 1; i <= 100; i++){
    if(i % 2 !== 0){
      console.log(i);
      count++;
      if(count === 5) break;
    }
    
  }
}


// QUESTION 25. Print numbers 1 to 50:
// - Divisible by 3 → print "Fizz"
// - Divisible by 5 → print "Buzz"  
// - Divisible by both → print "FizzBuzz"
// - Otherwise → print the number

for(let i = 1; i <= 50; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  } else if( i % 3 === 0){
    console.log("Fizz");
  } else if(i % 5 === 0){
    console.log("Buzz");
  } else{
    console.log(`${i}`);
  }
  
}


// QUESTION 26. Find the first number greater than 50 that is divisible by 9

{
  let i = 1;
  while(i <= 100){
    if(i % 9 === 0 && i>50){
      console.log(`${i}`);
      break;
    }
    i++;
  }
}



// QUESTION 27. Calculate the factorial of a number

{
  let val = +prompt("Enter a number");
  let sum = 1;

  if(isNaN(val)){
    console.log("Please enter valid number");
  };
  for(let i = val; i >= 1; i--){
    sum = sum * i;
  }
  console.log(sum);
}



// QUESTION 28. Print a countdown from a given number to 0

for(let i = 10; i >=0; i--){
  console.log(i);
  if(i === 0 ){
    console.log("Blast off");
  };
}


// QUESTION 29. Sum of all odd numbers between 1 and 200

{
  let sum = 0;
  for(let i = 1; i <= 200; i++){
    if(i % 2 !== 0){
      sum = sum + i;
    }
  }
  console.log(sum);
}


// QUESTION 30. Find how many numbers containing digit 3 between 1 and 100

{
  let count = 0;
  for(let i = 1; i <= 100; i++){
    let str = String(i);
    if(str.includes("3")){
      count++;
    }
  }
  console.log(count);
}


// QUESTION 31. Ask user’s age and check if eligible to vote If age >= 18 → “Eligible”, else → “Not eligible”

{
  let age = +prompt("Enter your age");
  if(isNaN(age)){
    console.error("Please Enter your correct age");
  }else if(age <= 17){
    console.log(`${age} you are not eligible vote`);
  }else{
    console.log(`${age} you are eligible for vote `);
  };
}


// QUESTION 32. Count how many numbers between 1 and 15 are greater than 8

{
  let count = 0;
  for(let i = 1; i <= 15; i++){
    if(i > 8){
      count++;
    }
  }
  console.log(count);
}


// QUESTION 33. Ask user for password and print access status Hardcoded correct password. Compare with user input.


{
  let userinput = prompt("Enter Password");
  let password = "password";
  if(userinput !== password){
    console.error("Wrong Password");
  }else{
    console.log("Access granted");
  }
}
 

// QUESTION 34. Allow only 3 attempts to enter correct password. If user get it right early, stop. If not "Account locked".


{
  let password = "password";
  let count = 0;

  let user = prompt("Enter password");
  count++;

  while(user !== password){
    if(count === 3){
      console.error("Account Locked");
      break;
    }
    user = prompt("Enter password");
    count++;
  }
  if(user === password) console.log("Access Granted");
}


// QUESTION 35. Ask user for words until they type “stop”. Count how many times they typed “yes” Loop until "stop" is typed. Count "yes".


{
  let count = 0;
  let user = prompt("Enter any word");

  while(user !== "stop"){
    if(user === "yes"){
      count++;
    }
    user = prompt("Enter any word");
  }
  console.log(`You typed "yes" ${count} times`);

}



// QUESTION 36. Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.


{
  for(let i = 1; i <= 50; i++){
    if(i % 7 ===   0){
      console.log(i);
    }
  }
}



// QUESTION 37. Sum of all odd numbers from 1 to 30 . Add only odd numbers. Print final sum.


{
  let sum = 0;
  for(let i = 1; i <= 30; i++){
    if(i % 2 !== 0){
      sum = sum + i;
    }
  }
  console.log(`Total sum of odd number from 1 to 30 is ${sum}`);
}



// QUESTION 38. Keep asking number until user enters an even number. use while loop. stop only if input is even.


{
  let user = +prompt("Enter a number");

  while(user % 2 !== 0){
    user = +prompt("Enter a number");
  }
  
  console.log(`${user} is even. loop stopped.`);
}


// QUESTION 39. Print numbers between two users inputs. Input start and end using prompt() print all between.


{
  let user1 = +prompt("Enter a number");
  let user2 = +prompt("Enter a number");


  if(user1 > user2){
    console.error("first input should be smaller then second !");
  }else{
      for(let i = user1; i <= user2; i++){
      console.log(i);
    }
  }
}


// QUESTION 40. Print only first 3 odd numbers from 1 to 20. use loop. stop with break after 3 odd prints.



{
  let count = 0;

  for(let i = 1; i <= 20; i++){
    
    if(i % 2 !== 0){
      count++;
      console.log(i);
    }

    if(count === 3){
      break;
    } 
  }
}


// QUESTION 41. Ask user 5 numbers. count how many are positive use loop + condition + counter.


{
  let counter = 0;
  let user;
  for(let i = 1; i <= 5; i++){
    user = +prompt("Enter a number");

    if(user > 0){
      counter++;
    }
  }
  console.log(`${counter} are positive numbers`);
}



// QUESTION 42. ATM simulator - allow 3 withdrawals start with 1000 rupee balance. ask withdrawal amount 3 times. if enough balance - deduct else insufficient balance.



{
  let balance = 1000;
  
  for(let i = 1; i <= 3; i++){
    
    let input = +prompt(`Withdrawal ${i}: Enter amount`);

    if(input > balance){
      console.error("Insufficient balance");
    }else {
      balance = balance - input;
      console.log(`Withdrawal amount: ${input} Remaining amount: ${balance}`);
    }
  }
  console.log(`Final balance: ${balance}`);

}




                                      //  FUNCTIONS  //



// QUESTION 1. Write a BMI calculator.


function bmi(weight, height){
  if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
    return "Invalid input";
  }

  let result = weight / (height * height);

  if(result >= 30) return `BMI: ${result.toFixed(2)} - Obese`;
  if(result >=25) return `BMI: ${result.toFixed(2)} - Overweight`;
  if(result >= 18.5) return `BMI: ${result.toFixed(2)} - Normal`;
  return `BMI: ${result.toFixed(2)} - Underweight`;
}

console.log(bmi(52,1.7));
console.log(bmi(90,1.7));
console.log(bmi(65,1.7));



// QUESTION 2. Write a function isEven(n) that returns true if even, false if odd


function isEven(n){
  if(n % 2 === 0) return true;
  return false;
}

console.log(isEven(6));



// QUESTION 3. Write a function celsiusToFahrenheit(c) that converts temperature - Formula: (c × 9/5) + 32


function celsiusToFahrenheit(c){
  return ((c * 9/5)+32);
}

console.log(celsiusToFahrenheit(37));



// QUESTION 4. Write a function fahrenheitToCelsius(f) that converts temperature - Formula: (f - 32) * 5/9


function fahrenheitToCelsius(f){
  return ((f - 32) * 5/9);
}

console.log(fahrenheitToCelsius(103));



// QUESTION 5. Write a function findMax(a, b, c) that returns the largest of three numbers without using Math.max

function findMax(a, b, c){
  if(a > b && a > c) return `${a} is largest number`;
  if(b > c && b > a) return `${b} is largest number`;
  return `${c} is largest number`;
}

console.log(findMax(84, 43, 112));



// QUESTION 6. Write a function isLeapYear(year) that returns true if leap year
// A year is leap if: divisible by 4, BUT not by 100, UNLESS also by 400


function isLeapYear(year){
  if(year % 400 === 0) return `${year} is leap year`;
  if(year % 100 === 0) return `${year} is not leap year`;
  if(year % 4 === 0) return `${year} is leap year`;
  return `${year} is not a leap year`;
}

console.log(isLeapYear(1900));


// QUESTION 7. Write a function repeatString(str, n) that returns the string repeated n times
// repeatString("ha", 3) → "hahaha"


function repeatString(str, n){
  let result = "";
  for(let i = 1; i <= n; i++){
    result = result + str;
  }
  return result;
}

console.log(repeatString("la", 4));


// QUESTION 8. Write a function reverseString(str) that reverses a string without using .reverse()


function reverseString(str){
  let result = "";
  for(let i = str.length -1; i >= 0; i--){
    result = result + str[i];
  }
  return result;
}
console.log(reverseString("hello"));



// QUESTION 9. Write a function isPrime(n) that returns true if a number is prime, false if not.


function isPrime(n){
  if(n <= 1) return `false ${n} is not a prime number`;

  for(let i = 2; i < n; i++){
    if(n % i === 0) return `false ${n} is not a prime number`;
  }

  return `true ${n} is a prime number`;
}

console.log(isPrime(6));