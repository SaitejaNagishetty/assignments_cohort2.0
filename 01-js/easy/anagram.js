/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const charCount1 = new Map();
  for (const char of str1) {
    if (charCount1.has(char)) {
      charCount1.set(char, charCount1.get(char) + 1);
    } else {
      charCount1.set(char, 1);
    }
  }

  const charCount2 = new Map();
  for (const char of str2) {
    if (charCount2.has(char)) {
      charCount2.set(char, charCount2.get(char) + 1);
    } else {
      charCount2.set(char, 1);
    }
  }

  for (const [char, count] of charCount1) {
    if (!charCount2.has(char) || charCount1.get(char) !== count) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
