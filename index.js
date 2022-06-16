function isPalindrome(word) {
  // Write your algorithm here

  const revWord= word.split('').reverse().join('')
  
  return word===revWord
}
   
/* 
  Add your pseudocode here
 create a word array with plit()
 reverse &join the word array 
  if (reversedWord === word) {
    return true;
    
  }
  else return false;
}
*/

/*
  Add written explanation of your solution here
split the string 
reverse the split string
join the reversed string
check whether the original string and reversed version are equal
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
}

module.exports = isPalindrome;
