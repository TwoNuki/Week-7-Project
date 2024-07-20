console.log ("Number 1");
// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// • Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// • Do not use numbers to reference the last element, find it programmatically.
//   ages[7] - ages[0] is not allowed!
// • Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// • Use a loop to iterate through the array and calculate the average age.


//array called ages with different values
let ages = [3, 9, 23, 64, 2, 8, 28, 93]


//1a. programmatically subtracting value of first element from last element of array
let sum1 = ages[ages.length-1] - ages[0];
console.log(sum1);

//1b. adding new age to the previous array and repeating steps to ensure it is dynamic
ages.push(40);

let sum2 = ages[ages.length-1] - ages[0]
console.log(sum2);


//1c. loop to iterate through array and calculate average age (used a function as that was how it was explained to me and i best understand it)
function averageAge(array){
    let sum = 0;
    for(let number of ages){
        sum += number
    }
    let average = sum/ages.length;
    return average
}
let average = averageAge(ages);
console.log(average);

//tried it with just a for of loop to see if it would work that way
let sum3 = 0;
 for(let  number of ages){
     sum3 += number;
 }
 let avg = sum3 / ages.length;
 console.log(avg);

 console.log('Number 2');

//  2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//  • Use a loop to iterate through the array and calculate the average number of letters per name.
//  • Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

//array containing names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let sumOfNames = 0;

//2a. for loop to go through each name and add them up to calculate average number of letters
for (let i=0; i < names.length; i++){
    console.log(names[i]);
    sumOfNames += names[i].length;
    console.log(sumOfNames);
}
console.log(sumOfNames/names.length);

//wasn't working with a for of loop for some reason
 /*for(let name of names){
     sumOfNames =+ name.length;
 }
 let nameAverage = sumOfNames / names.length;

 console.log(sumOfNames);
 console.log(names.length);
 console.log(nameAverage);*/


//it works with this function though
/*function averageName(array){
    let sum6 = 0;
    for(let name of names){
        sum6 += name.length;
    }
    let nameAverage = sum6/names.length;
    return nameAverage;
}
let averageOfNames = averageName(names);
console.log(averageOfNames);*/

//2b. loop to concatenate each name together with spaces, similar to the prior loop
let stringOfNames = "";
for (let i=0; i < names.length; i++){
    stringOfNames += names[i] + " ";
}
console.log(stringOfNames);

console.log("Number 3");
//3. How do you access the last element of any array?
console.log('by using arrayName[arrayName.length-1]');
console.log('example' + ' ' + names[names.length-1]);

console.log("Number 4");
//4. How do you access the first element of any array?
console.log('by using arrayName[0]');
console.log('example' + ' '+ names[0]);

console.log("Number 5");
//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
nameLengths = names.map((name) => {
    return name.length
});
console.log(nameLengths);

console.log("Number 6");
//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let lengthSum = 0;
for (let length of nameLengths){
    lengthSum += length;
}
console.log(lengthSum);

console.log("Number 7");
//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

//Here I have a function setup that defines a new variable called combinedWord that is initially an empty string, followed by a for loop to take the new variable and make it equal a defined word repeated n times. The combinedWord variable is then returned in the called function with the two parameters written in. Learned that variables in functions can be written implicitly in doing so.
function tripleWord(word, n){
    let combinedWord = "";

    for (let i=0; i < n; i++){
        combinedWord += word;
    }
    return combinedWord;
}
console.log(tripleWord("Hello", 3));

console.log("Number 8");
//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function combinedName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(combinedName("FirstName", "LastName"));

console.log("Number 9");
//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

//Using the reduce method, created a function that sets the inital sum as 0, adds the values in the array, and outputs true or false depending on if the result is greater than 100.
function largeNumber(array){
    let sumOfArray = array.reduce(
        (currentSum, currentValue) => currentSum + currentValue, 0
    )
    if(sumOfArray > 100){
        return true;
    }
    else{
        return false;
    }
}
console.log(largeNumber([2, 78, 45, 32])); //returns true
console.log(largeNumber([2, 4, 0, 9, 20, -5])) //returns false

console.log("Number 10");
//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

// Also using the reduce method, this function adds the values in the array and divides them by the array length to get the average of the elements.
function averageNumber(array){
   return array.reduce(
        (currentSum, currentValue) => currentSum + currentValue, 0
    )/array.length;
}
console.log(averageNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log("Number 11");
//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//Uses the same reduce method, this time on multiple arrays to get their averages, and then uses an if/else statement to output true or false depending on if the first array average is larger.
function isArrayBigger(array1, array2){
    array1.reduce(
        (currentSum, currentValue) => currentSum + currentValue, 0
    )/array1.length;
    array2.reduce(
        (currentSum, currentValue) => currentSum + currentValue, 0
    )/array2.length;
    if (array1 > array2){
        return true;
    }
    else{
        return false;
    }
}
console.log(isArrayBigger([40, 80, 120, 160, 200],[2, 4, 6, 8, 10])); //returns true
console.log(isArrayBigger([2, 4, 6, 8, 10], [40, 80, 120, 160, 200])); // returns false

console.log("Number 12");
//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//used implicit call for the function where the variable isn't defined until the function is called.
function willBuyDrink(boolean, number){
    if(isHotOutside === true && moneyInPocket > 10.50){
        return true;
    }
    else{
        return false;
    }
}
console.log(willBuyDrink(isHotOutside = true, moneyInPocket = 10.60)); //returns true
console.log(willBuyDrink(isHotOutside = false, moneyInPocket = 5.60)); //returns false

//alternatively, with both boolean and number both defined within function and allowing the function to be called with empty intake. currently commented out due to having the same name as the uncommented function and will override it.
// function willBuyDrink(boolean, number){
//     let isHotOutside = true;
//     let moneyInPocket = 25.00;
//     if(isHotOutside === true && moneyInPocket > 10.50){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(willBuyDrink());


console.log("Number 13");

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//tried to figure out how to make a function take an empty array with a set length, and then add a 1 or 0 to the array based on either input or random number, returning a string depending on whether the sum was greater or equal to a certain number, but couldn't figure it out. Defaulted to taking an array, calculating the sum of the array, and outputting the string based on whether the sum is greater than or equal to a number instead. Was doing it to keep in theme with the previous sumo wrestling site, where ranks are determined by wins/losses over 15 days.
function rankUp(array){
    let wins = array.reduce(
        (currentSum, currentValue) => currentSum + currentValue, 0
    )

    if(wins >= 8){
        return 'You ranked up!'
    }
    else{
        return 'You Ranked down...'
    }
}
console.log(rankUp([1,1,1,0,1,1,0,1,1,1,1,0,0,0,0])); //outputs 'You ranked up!'
console.log(rankUp([1,1,1,0,1,0,0,1,0,1,1,0,0,0,0])); // outputs 'You ranked down...'