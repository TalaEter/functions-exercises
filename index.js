// Exercise 1

console.log("Exercise 1 - Sum of Arguments uising reduce");
 //sum function that takes varying number of arguments and sums themc an take array too

 function sum(...args){
     if (args.length === 1 && Array.isArray(args[0])) //1 array of arrays
        return args[0].reduce( (a,b)=> a+b );
     
    return args.reduce( (a,b)=> a+b );
 }
 console.log(`Input of function is multiple primitive values 1 - 4 ${sum(1,2,3,4)}`);
 console.log(`Input of function is array of values 1 - 4 ${sum([1,2,3,4])}`);

// console.log(sum(1));



// Exercise 2

console.log("\nExercise 2 - Area of Circle");
// circle object with radius property to read and write , and area property to read only

let circle = {
    radius : 1,
    set rad(value){
         this.radius = value;
     },
    get rad(){
        return this.radius;
    },
    get area(){
        return Math.pow(this.radius,2)*3.14;
    }
};



// Exercise 3

console.log("\nExercise 3 - Error Handling of count occurance function");


try{
    const numbers = [1,1,1,1,1, 2, 3 ,4];
    const count = countOccurances(1, 1);
    console.log(count);
}
catch(e){
    console.log(e.message);
}


function countOccurances(array , searchElement){

    if(!Array.isArray(array)) throw new Error("Argument is not an Array!");


    let count=0;
    for (let key of array){
        if (key === searchElement)count++;
    }
    return count;
}




// Exercise 3 Samar

console.log("\nExercise 3/Samar - Find perfect numbers from 1 - 500");

perfectNumbers();

function perfectNumbers(){
    const divisers=[], perfect=[];
    for (let i =6 ; i<501 ; i++){
        divisers.length=0;
        for(let j=1 ; j<i ; j++)
            if(i%j === 0)divisers.push(j);
        if( divisers.reduce( (a,b) => a + b ) === i ) console.log(i);
    }
}







// Exercise 4 Samar

console.log("\nExercise 4/Samar - Duplicate number in integer array");


try{
    console.log(`Duplicate number in array are : ${findDuplicate([4,1,2,3,4,5,5])}`);
}
catch (e){
    console.log(e.message);
}

function findDuplicate(array){

    if(!Array.isArray(array)) throw new Error("Argument is not an array! ")


    const notDuplicate=[], duplicate=[];

    for(let key of array){
        // console.log(notDuplicate.includes(5));
        if (!notDuplicate.includes(key)) notDuplicate.push(key);
        else duplicate.push(key);
    }
    
    // console.log(notDuplicate);
    if(duplicate.length === 0) return "no duplicate numbers in array";
    return duplicate;
}




