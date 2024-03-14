// Write your tests here!
const assert = require('assert');
const { caesar } = require('../src/caesar.js')

describe('Caesar Cipher Decoder Tests', function() {
  it('should decode a message with positive shift', function() {
    assert.strictEqual(caesar('khoor, zruog!', 3, false), 'hello, world!');
  });

  it('should decode a message with negative shift', function() {
    assert.strictEqual(caesar('dtz rfd gj rd lzjxy', 5, false), 'you may be my guest');
  });

  it('should maintain non-alphabetic characters', function() {
    assert.strictEqual(caesar('khoor, zruog!', 3, false), 'hello, world!');
  });

  it('should return false if shift value is not within the range', function() {
    assert.strictEqual(caesar('xyz', 27, false), false);
  });
});

 // Add more tests as needed





