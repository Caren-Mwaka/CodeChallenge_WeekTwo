//Question 1:
//'tHE qUICK bROWN fOX' - expected output for the code challenge; Write a function that accepts a string as input and swaps the case of each character.

// 'The Quick Brown Fox' string is assigned to a variable called sentenceInput'
// The split method then splits the sentenceInput into an array of words. 
// This is because I wanted to use the .map method to modify the string by changing the first letter of each word to lowercase whilst the rest are uppercase.
// However, map is an array method and cannot be directly applied to a string.

const sentenceInput = 'The Quick Brown Fox'
const newSentence = sentenceInput.split(' ').map(sentenceOutput).join(' ')

// The .map method is then applied to the array of words.
// This transforms the first letter of each word to lowercase and the rest to uppercase using the charAt method(+.toLowerCase method) and the slice(+.toUpperCase method) method.
// The charAt method is used to get the first character of the word,that is i=0. 
// The slice method is used to get the rest of characters in the word,that is from i=1 to the end of the word.
function sentenceOutput(arrayOfWords){
  return `${arrayOfWords.charAt(0).toLowerCase()}${arrayOfWords.slice(1).toUpperCase()}`
}
console.log(newSentence)

// The .join method is then used to join the array of words back into a string with spaces between them.

// My output: caren@caren-HP-ZBook-14u-G6:~/Development/code/codechallenge/CodeChallenge_WeekTwo$ node quick-brown-fox.js
//tHE qUICK bROWN fOX
