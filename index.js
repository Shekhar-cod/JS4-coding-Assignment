let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// Subtracting the value of the first element in the array from the value in the last element of the array.
let result = ages[ages.length - 1] - ages[0];
console.log("Result of subtraction:", result);

// Adding a new age to my array
ages.push(95);

// Subtracting the value of the first element from the value in the last element.
let newResult = ages[ages.length -1] - ages[0];
console.log("Result of new subtraction:", newResult);

// Calculating the average age using a loop
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}

let averageAge = totalAge / ages.length;
console.log("Average age:", averageAge);

// Creating an array called names
let names = ['Sam', 'tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

// Calculating the average number of letters per name.
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}

let averageLetters = totalLetters / names.length;
console.log("Average letters:", averageLetters);

// Concatenating all the names together, seperated by spaces.
let concatenaedNames = "";
for (let i = 0; i < names.length; i++) {
    concatenaedNames += names[i];
    if (i < names.length - 1) {
        concatenaedNames += " ";
    }
}

console.log("Concatenated names", concatenaedNames );


// accessing the last element of an array.
let array = [1, 2, 3, 4, 5];
let lastElement = array[array.length -1];
console.log(lastElement);

//accessing the first element of an array.
let firstElement = array[0];
console.log(firstElement);

let nameLenths = [];

// Iterating over the names array and adding the length of each nameLengths array.
for (let i = 0; i < names.length; i++) {
    nameLenths.push(names[i].length);
}

console.log(nameLenths);

// Iterating over the nameLengths array and calculating the sum.

let sum = 0;
for (let i = 0; i < nameLenths.length; i++) {
    sum += nameLenths[i];
}

console.log("Sum of name lengths:", sum);

//writting a function that takes two parameters, word and n, as arguments
//and returns the word concatenated to itself n number of times.
function repeatWord(word, n) {
    let repeatedWord = "";
    for (let i = 0; i < n; i++) {
        repeatedWord += word;
    }
    return repeatedWord;
}

let results = repeatWord("Hello", 3);
console.log(results);

//writting a function that takes two parameters, firstName and lastName,
// and returning a full name.
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

let fullName = getFullName("Shekhar", "Rijal");
console.log(fullName);

//writting a function that takes an array of numbers and returns true if the 
//sum of all the numbers in the array is greater than 100.
let numbers = [30, 50, 25];
function isSumGreaterThen100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}


console.log("sum of the number is greater then 100:", isSumGreaterThen100(numbers));

//calculating the Average of the numbers.
function average(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

console.log("Average of the numbers:", average(numbers));

//writing a function that takes two arrays of numbers and retuns true 
//if the average of the element in the first array is greater than the 
//average of the elements in the second array

let firstArray = [30, 50, 25];
let secondArray = [20, 40, 30 ];

function isFirstArrayAverageIsGreaterThanSecondArrayAverage(firstArray, secondArray) {
    let average = array => {
        if (array.length ===0) {
            return 0;
        }

        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum / array.length;
    };

    let firstArrayAverage = average(firstArray);
    let secondArrayAverage = average(secondArray);

    return firstArrayAverage > secondArrayAverage;
}

console.log("Average of firstArray is greater than average of secondArray:", isFirstArrayAverageIsGreaterThanSecondArrayAverage(firstArray, secondArray));

//Writting a function called willBuyDrink that takes a boolean 
//isHotOutside, and a number moneyInPocket, and returns true if it
//is hot outSide and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInpocket) {
    return isHotOutside && moneyInpocket > 10.50;
}
console.log("Will Buy Drink:",willBuyDrink(true, 15));

//Creating a function that calculates and returns the square of a number, which is passed in as a parameter.
//This function will take one parameter, and return the parameter multiplied by itself.

let num = 10;
function squareOfNumber(num) {
    return num * num
}

console.log("Square of a number is:", squareOfNumber(num));






