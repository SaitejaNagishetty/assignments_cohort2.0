/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let ans = 0;
  str = str.toLowerCase();

  for (const char of str) {
    switch (char) {
      case "a":
        ans++;
        break;

      case "e":
        ans++;
        break;

      case "i":
        ans++;
        break;

      case "o":
        ans++;
        break;

      case "u":
        ans++;
        break;

      default:
        break;
    }
  }
  return ans;
}

module.exports = countVowels;
