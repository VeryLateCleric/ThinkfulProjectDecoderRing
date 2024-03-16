// Write your tests here!
const { expect } = require("chai");
const { substitution } = require('../src/substitution');

describe("substitution", () => {
    it("should correctly encode the input", () => {
      expect(substitution("hello", "zyxwvutsrqponmlkjihgfedcba")).to.equal("svool");
    });
  
    it("should correctly decode the input", () => {
      expect(substitution("svool", "zyxwvutsrqponmlkjihgfedcba", false)).to.equal("hello");
    });
  
    it("should maintain spaces", () => {
      expect(substitution("hello world", "zyxwvutsrqponmlkjihgfedcba")).to.equal("svool dliow");
    });
  
    it("should handle special characters", () => {
      expect(substitution("hello!$#", "zyxwvutsrqponmlkjihgfedcba")).to.equal("svool!$#");
    });
  
    it("should return false if alphabet length is not 26", () => {
      expect(substitution("hello", "abc")).to.equal(false);
    });
  
    it("should return false if alphabet characters are not unique", () => {
      expect(substitution("hello", "abcdefghijklmmopqrstuvwxyz")).to.equal(false);
    });

    it("should encode and decode correctly with different alphabets", () => {
      const input = "The quick brown fox jumps over the lazy dog.";
      const alphabet1 = "qwertyuiopasdfghjklzxcvbnm";
      const encoded = substitution(input, alphabet1);
      const decoded = substitution(encoded, alphabet1, false);
      expect(decoded).to.equal(input.toLowerCase());
    });
  
  });