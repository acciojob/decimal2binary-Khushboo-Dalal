function decimalToBinary(decimal) {
  let binary = '';

  // Edge case: if the input is 0, return '0' directly
  if (decimal === 0) {
    return '0';
  }

  while (decimal > 0) {
    // Append the least significant bit to the binary string
    binary = (decimal % 2) + binary;

    // Update the decimal by dividing it by 2 (integer division)
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}

console.log(decimalToBinary(decimal));