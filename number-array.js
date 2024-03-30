//Question 2:
//The challenge is a function that accepts two numbers to generate an array between them.
//numStart and numEnd are the parameters that hold the two numbers.

function number(numStart, numEnd) {
    //An empty array called newArray is initialized. This is where the generated numbers will be stored.
    const newArray = [];
    //The if statement checks if the numEnd is greater than numStart. If it is, the for loop will run. The array will be in ascending order.
    //To get the numbers between numStart and numEnd the for loop iterates through the numbers from numStart to numEnd and generates a new array with the numbers between numStart and numEnd, including numStart and numEnd.
     if (numEnd > numStart) {
            for (let i = numStart; i <= numEnd; i++) {
                newArray.push(i);
            }}
    //If numEnd is not greater than numStart, the else statement will run. The array will be in descending order. 
    // The for loop iterates from start to end in descending order and push each number to the result array.
         else 
        {
            for (let i = numStart; i >= numEnd; i--) {
                newArray.push(i);
            }
        }
    
        return newArray;// This returns the newArray with the generated numbers between numStart and numEnd.
    }
    
    console.log(number(4, 7));  
    console.log(number(-4, 7)); 
    
    /*My output: caren@caren-HP-ZBook-14u-G6:~/Development/code/codechallenge/CodeChallenge_WeekTwo$ node number-array.js
    [ 4, 5, 6, 7 ]
    [
      -4, -3, -2, -1, 0,
       1,  2,  3,  4, 5,
       6,  7
    ]*/