// Q3.8 Import the built-in 'fs' module for file system operations
const fs = require('fs');

// Define the filename to read from
const filename = "output.txt";

try {
  // Read the contents of the file using UTF-8 encoding
  const content = fs.readFileSync(filename, 'utf8');

  // Display the content to the screen (console)
  console.log("Contents of the file:");
  console.log(content);
} catch (error) {
  // If there is an error, print it to the console
  console.error("Error reading the file:", error);
}
