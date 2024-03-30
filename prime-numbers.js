//Question 3:
//A JavaScript function that accepts two numbers to generate an array between them.
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,] 

function primeNumber(number) {
// The function primeNumbers takes a single argument number.
// It first checks if the number is less than or equal to 1, since 1 is not a prime number. 
// If it is, the function returns null indicating that the number is not a prime number.
// When I don't include this part, 1 is returns as part of the prime numbers.
    if (number <= 1) {
        return null;
    }
//The for loop iterates through the numbers from 2 up to the length of the arrayNumbers. 
//arrayNumbers.length represents the total number of elements in the array, and hence, the loop iterates over all these numbers.
    for (let i = 2; i <= arrayNumbers.length; i++) {
        if (number !==i && number % i === 0) {
            return null;
        }
    }
// If (number !== i) ensures that the number being checked is not the same as the current divisor. 
// This prevents the number from being falsely identified as not a prime number due to the fact that every number is divisible by itself.
// If the condition number % i === 0 is true without checking if (number !== i), the number will always be divisible by itself.
    return number;
}
console.log(arrayNumbers.filter(primeNumber));
//The filter method is applied to numbersArray, and the primeNumbers function is passed as an argument to filter.
//The filter method creates a new array containing only the elements of numbersArray 

//An alternative stopping point for the for loop can be using the square root of the given number.
//This is to reduce the number of iterations needed to check for prime numbers particularly when the numbers are too many.
//for example if I have the number 7 its square root would be 2.6 I only need to check if 7 is divisible by number 2 to 3 where its square root lies. If not then it is automatically a prime number.
//The Math.sqrt(number) part calculates the square root of the given number, and the loop iterates through numbers up to this square root reduc
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,] 

function primeNumbers(number) {
    
    if (number <= 1) {
        return null;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return null;
        }
    }

    return number;
}

console.log(numbersArray.filter(primeNumbers));

/* My output: caren@caren-HP-ZBook-14u-G6:~/Development/code/codechallenge/CodeChallenge_WeekTwo$ node prime-numbers.js
[ 2, 3, 5, 7 ]
[ 2, 3, 5, 7 ]*/

