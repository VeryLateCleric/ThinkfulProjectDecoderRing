// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
// you can add any code you want within this function scope


function caesar(input, shift, encode = true) {
  if (!shift || shift < -25 || shift > 25) {
    return false;
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  input = input.toLowerCase();
  let result = '';
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (/[a-z]/.test(char)) {
      let charIndex = alphabet.indexOf(char);
      if (encode) {
        charIndex = (charIndex + shift) % 26;
        if (charIndex < 0) {
          charIndex += 26; // Handle negative shift
        }
      } else {
        charIndex = (charIndex - shift) % 26;
        if (charIndex < 0) {
          charIndex += 26; // Handle negative shift
        }
      }

      result += alphabet[charIndex];
    } else {

      result += char;
    }
  }
  return result;
}
  return {
    caesar,
  };

})();

module.exports = { caesar: caesarModule.caesar };
