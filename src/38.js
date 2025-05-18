function getGreeting(name) {
  if (!name || name === 'Anonymous') {
    name = "Guest";
  }
  
  return `Hello, ${name}! How are you doing today?`;
}

console.log(getGreeting("Alice"));
