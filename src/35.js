function fibonacci(n) {
    if (n <= 1) return n;
    let previous = 0,
        current = 1,
        next = 0;

    for (let i = 2; i <= n; i++) {
        next = current + previous;
        previous = current;
        current = next;
    }

    return current;
}

console.log(fibonacci(10)); // Output: 55
