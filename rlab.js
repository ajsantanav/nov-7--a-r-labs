// FizzBuzz
//let x = 80;
let arr = []; //stored in the first array
let arr2 = []; //stored in the second array
let tempArr = []; //temporary array
const peopleData = []; //
let cvsString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let count = 1;

function fizzBuzz (x) {
    for (let i = 1; i<=x; i++)
    {    
        if(i % 3 == 0 && i % 5 == 0)
        {
            console.log("fizzBuzz");
        }
        else if(i % 5 == 0)
        {
            console.log("fizz");
        }
        else if (i % 3 == 0)
        {
            console.log("buzz");
        }
        else
        {
            console.log(i);
        }        
    }
}
let myMin = 1;
let myMax = 9000;
let x = randomNumber();
function randomNumber() {
    let num = Math.floor(Math.random() * 1000);
    return num;
}

console.log("Starting number is " + x)
//primeNumber 
function isPrime(x) {
   //checks for value to not be 1 or 0
    if( x <= 1) {
        return false;
    }
    //Hard checks for values 2, 3, 5 since divided by themselves can cause a problem and not return a value
    //|| x == 5 || x == 3 || x == 7
    else if(x == 2 || x == 5 || x == 3 || x == 7) {
        return true;
    }
    // || x % 7 == 0
    else if(x % 2 == 0 || x % 3 == 0 || x % 5 == 0){
        return false;
    }
    else {
        return true;
    }
}
console.log(nextPrime(x))
function nextPrime(x)
{
    let num = x;
    const nextPrime = false;
    while(!nextPrime){
        num++;
        if(isPrime(num)){
            return num;
        }

    }
}

function parseCsv(cvsString) {
    let word = '';

    for(let i = 0; i < cvsString.length; i++) {
        const char = cvsString[i];
    
        if(char == ','){
            arr.push(word);
            word = "";
        }
        else if (char == '\n') {
            arr.push(word);
            word = "";
        }
        else {
            word += char;
        }
        
    }
    
    if (word || arr.length > 0) {
        arr.push(word);
    }
    return arr;
}

function arraySections(arr) {
    for(let j = 0; j <= arr.length; j++) {
        
        if(count % 4 == 0){
            tempArr.push(arr[j])
            arr2.push(tempArr);
        
            tempArr = []
        }
        else {
            tempArr.push(arr[j])
        }
        
        count++;
    }
    return arr2;
}

function convertToObj() {
    const objectKeys = arr2[0];
    
    for(const row of arr2.slice(1)) {
        let peopleObj = {}
        for(let i = 0; i < objectKeys.length; i++) {
            // imagine this like saying 
            /* let peopleObj = {
                objectKeys[i]  : row[i]
                "id" : "42"  
            }
            */
            peopleObj[objectKeys[i].toLowerCase()] = row[i]
        }
        peopleData.push(peopleObj);
    }
    
}

function ageAverage(peopleData) {
    let totalAge = 0;
    for(let i = 0; i < peopleData.length; i++) {
        totalAge += parseInt(peopleData[i].age);
    }

    let avgAge = totalAge / peopleData.length;
    console.log("Average age is; " + avgAge);
}

// parseCsv(cvsString);
// // console.log(arr);
// arraySections(arr);
// // console.log(arr2);
// convertToObj(arr2);

// peopleData.unshift({ id: "48", name: "Barry", occupation: "Runner", age: "25" });
// peopleData.splice(4);
// peopleData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
// console.log(peopleData)
// ageAverage(peopleData);