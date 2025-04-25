// Node.js example to demonstrate how to use `fs` module to read and write files.
const fs = require('fs');

try {
  // Read a file
  const readFileContent = () => {
    return new Promise((resolve) => {
      fs.readFile('/path/to/file', 'utf-8', (err, data) => {
        if (err) {
          resolve(err);
        }
        resolve(data);
      });
    });
  };

  // Write a file
  const writeFileContent = () => {
    return new Promise((resolve) => {
      fs.writeFile('/path/to/file', 'writing content here', (err) => {
        if (err) {
          resolve(err);
        }
        resolve(null);
      });
    });
  };

  // Read and write files in the same directory
  readFileContent()
    .then(readFileContent)
    .then(writeFileContent);

  console.log('Files read and written successfully.');
} catch (error) {
  console.error(error);
}
