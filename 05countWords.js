function countWords(str) {
    return str.trim().split(/\s+/).length;
}

// Example usage:
console.log(countWords("Hello world!")); // Output: 2
console.log(countWords("  This is a test string.  ")); // Output: 5
console.log(countWords("")); // Output: 0