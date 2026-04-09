// Abraham Lincoln
// 10 APR 20XX
// Traditional Function Examples

// Function to calculate sum of two numbers
function sumTwoNumbers(a, b) {
    // Return the sum of the two input parameters
    return a + b;
}

const num1 = 5;
const num2 = 3;
let finalAnswer = sumTwoNumbers(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${finalAnswer}.`);

// Function to welcome user by first name
function welcomeUser(firstName) {
    // Welcome user by first name
    return `Welcome, ${firstName}!`;
}

const userName = "Alyssa";
const greeting = welcomeUser(userName);
console.log(greeting);


// Function to calculate and return area of a rectangle
function calcRectangleArea(length, width) {
    // Return the product of the length and width to get the area
    return length * width;
}

let rectLength = 4;
let rectWidth = 6;
let rectArea = calcRectangleArea(rectLength, rectWidth);
console.log(`Area of your rectangle (sq. ft.) is: ${rectArea}`);
