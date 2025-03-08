function filterOddNumbers(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}

// Example usage:
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: [1, 3, 5, 7, 9]
console.log(filterOddNumbers([10, 15, 20, 25, 30])); // Output: [15, 25]