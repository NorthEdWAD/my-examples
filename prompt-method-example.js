// Abraham Lincoln
// 17 APR 20XX
// JS Prompt Function

// Prompt function is used to prompt -- ask -- the user to enter some information, e.g., first name, age, 
// length of a rectangular room, width of a rectangular room, etc.

// Example 1
// Prompt user for their age, then use parseFloat() function to convert input into a number
let age = prompt('Please enter your age (Example: 25):\n');
age = parseFloat(age);

// Could also simplify code like so:
let age = parseFloat(prompt('Please enter your age (Example: 25):\n'));

// Example 2
// Prompt user to enter first and last name
const firstName = prompt('Please enter your first name (Example: Joe):\n');
const lastName = prompt('Please enter your last name (Example: Robertson):\n');
const outputString = `You said your name was ${firstName} ${lastName}.`;
// Display output string in browser console
console.log(outputString);
