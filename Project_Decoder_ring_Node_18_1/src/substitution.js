// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function isValidAlphabet(alphabet) {
    if (!alphabet || alphabet.length !== 26) return false; // !alphabet prevents TypeError when undefined

    const seen = new Set();
    for (let char of alphabet) {
      if (seen.has(char)) return false;
      seen.add(char);
    }
    return true;
  }

  function substitution(input, alphabet, encode = true) {
    if (!isValidAlphabet(alphabet)) return false;
    
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const substitutionAlphabet = alphabet.toLowerCase();
    
    console.log(input);
    console.log(substitutionAlphabet);

    let result = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i].toLowerCase();
      const index = encode
      ? standardAlphabet.indexOf(char)
      : substitutionAlphabet.indexOf(char);
      
      if (index !== -1) {
        result += encode ? substitutionAlphabet[index] : standardAlphabet[index];
      } else {
        result += char;
      }
    }
    return result;
    // your solution code here no wait it was all up there my b  8|
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
