function getRandomNodeJSCode() {
  // Generate a random number between 1 and 10
  const randNum = Math.floor(Math.random() * 10) + 1;

  // Create an array with the numbers from 1 to 10
  const numArray = [...Array(randNum).keys()];

  // Generate a random string of letters and numbers
  const randString = Array.from(
    { length: Math.floor(Math.random() * 10) },
    () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  ).join("");

  // Return the random code
  return `const ${randString} = ${numArray};`;
}
