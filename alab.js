// Take an array of numbers and return the sum.
// Take an array of numbers and return the average.
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
const arr = [10, 2, 1, 7, 30];

// sum(arr);
// function sum(arr) {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
       
//     }
//     console.log("Total sum is: " + sum);
//     return sum;
// }

// avg(arr);

// function avg(arr) {
//     let sum = 0, average = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     average = sum / arr.length;
//     console.log("Average is: " + average);
//     return average;
// }

// ############################################################################################
//                                      Longest String
// ############################################################################################
const strArr = ['say', 'hello', 'in', 'the', 'morning'];
longStr(strArr);
function longStr(strArr) {
    let longestNum = 0;
    let longestStr
    for(let i = 0; i < strArr.length; i++) {
        if(longestNum < strArr[i].length)
        {
            longestNum = strArr[i].length;
            longestStr = strArr[i];
        }
        
    }
    return console.log(longestStr + " is the longest string for a total of " + longestNum + " letters");
}