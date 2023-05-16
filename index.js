function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse().join("")
  
  return reversedWord === word

}

/* 
  Add your pseudocode here
   -create a variable with value of word in reverse 
    -split string into array split("")
    -reverse aray using reverse()
    -stringify array using join("")
  -create an if else statement
  -compare variable with word in reverse to original word
  -return === to retrun if value is true or false between reversed word and original word
*/

/*
  Add written explanation of your solution here
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

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;
