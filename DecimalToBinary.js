function decimalToBinary(decimalNumber) {
    if (decimalNumber === 0) return '0'; // Special case for zero
    
    let binaryResult = '';
    
    while (decimalNumber > 0) {
        binaryResult = (decimalNumber % 2) + binaryResult;
        decimalNumber = Math.floor(decimalNumber / 2);
    }
    
    return binaryResult;
}

// Example usage:
const decimalNumber = 13;
console.log(decimalToBinary(decimalNumber)); // Output: 1101
