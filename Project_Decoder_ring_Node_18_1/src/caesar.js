// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let result = '';
    for (let i = 0; i < message.length; i++) {
      let char = message.charAt(i);
    
      if (char.match(/[a-zA-Z]/)) {
        let code = char.charCodeAt(0);

        
      }
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
