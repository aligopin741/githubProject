const getRandomNodeJSCode = () => {
  const arr = [];
  for(let i = 0; i < 10; i++) {
    arr.push(`const ${Math.random().toString()} = "${Math.random().toString()}"`);
  }
  return arr.join(';');
}
