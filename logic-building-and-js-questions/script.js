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