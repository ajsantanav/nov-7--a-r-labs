// FizzBuzz
let x = 13;
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

//primeNumber 
function isPrime(x) {
   //checks for value to not be 1 or 0
    if( x == 1 || x == 0) {
        return false;
    }
    //Hard checks for values 2, 3, 5 since divided by themselves can cause a problem and not return a value
    else if(x == 2 || x == 5 || x == 3 || x == 7) {
        return true;
    }
    else if(x % 2 == 0 || x % 3 == 0 || x % 5 == 0 || x % 7 == 0)
    {
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