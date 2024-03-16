// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function isValidAlphabet(alphabet) {
    const alphabetSet = new Set()
    if (alphabetSet.size !== 26) return false;

    const seen = new Set();
    for (let char of alphabet) {
      if (seen.has(char)) return false;
      seen.add(char)
    }
    return true
  }

  function substitution(input, alphabet, encode = true) {
    if (!isValidAlphabet(alphabet)) return false;
    

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const substitutionAlphabet = alphabet.toLowerCase();
    
    let result = '';
    for (let i = 0; i < input.length; i++) {
      const char = input[i].toLowerCase();

      if (char.match(/[a-z]/)) {
        const index = encode
        ? standardAlphabet
        : substitutionAlphabet
        result += encode ? substitutionAlphabet : standardAlphabet
      } else {
        result += char;
      }

    }
    return result;
    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
