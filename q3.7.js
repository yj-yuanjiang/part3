//Q3.7 Import the built-in 'fs' module for file system operations
const fs = require('fs');

// Define the content to be written to the text file
const content = "Hello, this is a test string saved in output.txt.";

// Define the filename
const filename = "output.txt";

try {
  // Write the content to the specified file using UTF-8 encoding
  fs.writeFileSync(filename, content, 'utf8');

  // Print success message to the console
  console.log("File has been written successfully.");
} catch (error) {
  // If there is an error, print it to the console
  console.error("Error writing to file:", error);
}