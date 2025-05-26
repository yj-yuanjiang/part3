// Q3.1 Define the following strings

// Define a string variable
let myString = "This is a string";

// Define another string (there are 3 blak spaces at the beginning)
let anotherString = "   Another string";

// Define a  greeting string
let hello = "Hello there!";

//Define your name
let myName ="Yuan";

//Print all strings to the console
console.log("myString:", myString);
console.log("anotherString:", anotherString);
console.log("hello:", hello);
console.log("myName:", myName);


// Q3.2 Use the utility functions to find out the following information

// Get the length of myString using .length property
let myStringLength = myString.length;

// Get the first character of myString using .charAt(0)
let firstCharacter = myString.charAt(0);

// Get the 11th character of myString using .charAt(10)
let eleventhCharacter = myString.charAt(10);

//Print them to the console
console.log("Length of myString:", myStringLength);
console.log("First character of myString:", firstCharacter);
console.log("11th character of myString:", eleventhCharacter);

// Q3.3 Use the functions slice and substring to create new strings
// Extract "is a" from myString using slice (starts at index 5, ends before index 9)
let slicedString = myString.slice(5, 9);

// Extract "the" from anotherString using substring (starts at index 6, ends before 9)
let substringResult = anotherString.substring(6, 9); 

// Print the results to the console
console.log('Sliced "is a" from myString:', slicedString);
console.log('Substring "the" from anotherString:', substringResult);

// Q3.4 Change the case of the myName string
// Convert myName to uppercase using .toUpperCase()
let upperCaseName = myName.toUpperCase(); 
console.log("Upper case:", upperCaseName);

// Convert myName to lowercase using .toLowerCase()
let lowerCaseName = myName.toLowerCase(); 
console.log("Lower case:", lowerCaseName);

// Q3.5 Use various utility methods to create new strings
// 1. Use the concat method to join hello and myName
// The concat() method joins two or more strings
// Concatenate hello and myName with a space in between
let combinedString = hello.concat(" ", myName); 
console.log("Combined string:", combinedString);

// 2. Use the trim method to remove the spaces in anotherString
// The trim() method removes whitespace from both ends of a string
let trimmedString = anotherString.trim();
console.log("Trimmed string:", trimmedString); 

// 3. Use the replace method to change "is a" to an empty space in myString
// The replace() method replaces a specified value with another value in a string
let replacedString = myString.replace("is a", " ");
console.log("Replaced string:", replacedString); 

// 4. Use the split method on myString using spaces to break the string
// The split() method splits a string into an array of substrings
let splitString = myString.split(" ");
console.log("Split string:", splitString); 

