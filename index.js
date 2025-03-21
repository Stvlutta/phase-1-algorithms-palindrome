function isPalindrome(word) {
  // Convert the word to lowercase to ensure the comparison is case-insensitive
  word = word.toLowerCase();
  
  // Reverse the word and compare it to the original word
  return word === word.split('').reverse().join('');
}

/* 
  Pseudocode:
  1. Convert the input word to lowercase.
  2. Reverse the lowercase word.
  3. Compare the reversed word with the original lowercase word.
  4. If they are the same, return true; otherwise, return false.
*/

/*
  Explanation:
  The function first converts the input word to lowercase to ensure the comparison is case-insensitive.
  It then reverses the word by splitting it into an array of characters, reversing the array, and joining it back into a string.
  Finally, it compares the reversed word with the original word. If they are the same, the word is a palindrome, and the function returns true.
  Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
