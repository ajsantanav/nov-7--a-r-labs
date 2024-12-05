let arr = []; //stored in the first array
let arr2 = []; //stored in the second array
let tempArr = []; //temporary array
const peopleData = []; //
let cvsString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cvsToStr = "";
let count = 1;

// Feeling Loopy
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

function cvsToString() {
    for(let i = 0; i < peopleData.length; i++) {
        cvsToStr = `${peopleData[i].id},${peopleData[i].name},${peopleData[i].occupation},${peopleData[i].age}`;
    }

    console.log(cvsToStr);
}

parseCsv(cvsString);
console.log(arr);
arraySections(arr);
console.log(arr2);
// convertToObj(arr2);


// peopleData.unshift({ id: "48", name: "Barry", occupation: "Runner", age: "25" });
// peopleData.splice(4);
// peopleData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
// console.log(peopleData)
// ageAverage(peopleData);

// cvsToString();