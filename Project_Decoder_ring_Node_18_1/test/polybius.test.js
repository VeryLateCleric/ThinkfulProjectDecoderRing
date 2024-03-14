// Write your tests here!
const { expect } = require('chai');
const { polybius } = require('../src/polybius')

describe('Polybius Cipher', () => {
    describe('Encoding', () => {
        it('should encode "thinkful" correctly', () => {
          const plaintext = "thinkful";
          const expected = "4432423352125413";
          const actual = polybius(plaintext);
          expect(actual).to.equal(expected);
        });
    
        it('should encode "Hello world" correctly', () => {
          const plaintext = "Hello world";
          const expected = "3251131343 2543241341";
          const actual = polybius(plaintext);
          expect(actual).to.equal(expected);
        });
      });
    
      describe('Decoding', () => {
        it('should decode "3251131343 2543241341" correctly', () => {
          const ciphertext = "3251131343 2543241341";
          const expected = "hello world";
          const actual = polybius(ciphertext, false);
          expect(actual).to.equal(expected);
        });
    
        it('should decode "4432423352125413" correctly', () => {
          const ciphertext = "4432423352125413";
          const expected = "th(i/j)nkful";
          const actual = polybius(ciphertext, false);
          expect(actual).to.equal(expected);
        });
    
        it('should return false if the number of characters in ciphertext is odd', () => {
          const ciphertext = "44324233521254134";
          const actual = polybius(ciphertext, false);
          expect(actual).to.be.false;
        });

        it('should decode "42 1123 443251 15512445 2343415113 4312 11 234341512433 23114324 22513351241113." correctly', () => {
            const ciphertext = "42 1123 443251 15512445 2343415113 4312 11 234341512433 23114324 22513351241113."
            const expected = "I am the very model of a modern ma(i/j)or general."
            const actual = polybius(ciphertext, false);
            expect(actual).to.be.false;
        })
      });
})