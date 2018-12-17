 // TP 4 //

// Exercice 1 //

let users = ['Mike', 'John', 'Mathieu', 'Lenny', 'Joey', 'Marvin', 'LR', 'Daniel', 'Janis'];

function function1(sequence) { // function to copy array

  let i = 0; // intermediary value
  let currentElement; // intermediary value using with sequentiel processing
  while (i < sequence.length) { // continuation condition
    currentElement == sequence[i]; // recovery of the current Element
    i = i + 1; // update of the intermediate variable used
    console.log(currentElement); // processing of current element
  }
}


// Exercice 2 //

function firstTenElementsArray(sequence) {
  let i = 0;
  let currentElement;
  while (i < 10) {
    currentElement = sequence[i];
    i = i + 1;
    if (currentElement === undefined) {
      break;
    }
    console.log(currentElement);
  }
}

function2(users);

// Exercice 3 //

let array = ['jean', 'robert', 'louis', 'janis', 'antoine', 'lenny', 'marine', 'paul', 'henri', 'albert', 'marvin', 'dylan'];
let array2 = ['1', '2', '3'];

function display10ElementsArray(array) {
  let i = 0;
  let currentElmt;

  if (array.length < 10) {
    while (i < array.length) {
      currentElmt = array[i];
      i = i + 1;
      console.log(currentElmt);
    }
  } else {
    while (i < 10) {
      currentElmt = array[array.length - 10 + i];
      i++;
      console.log(currentElmt);
    }
  }
}

console.log("array1");
displayLast10ElementsArray(array);

console.log("array2");
display10ElementsArray(array2);


// Exercice 4 //

let array = [1,2.5,40,71,11.56,47,2,972,45];

function copyElementsPlus1(array) {
  let i = 0;
  let currentElmt;
  let copyArray = [];
  while (i < array.length) {
    currentElmt = array[i] + 1;
    i++;
    copyArray.push(currentElmt);
  }
  return copyArray;
}

let allElementsArrayPlus1 = copyElementsPlus1(array);

function displayElementsArray(array) {
  let i = 0;
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    console.log(currentElmt);
  }
}

displayElementsArray(allElementsArrayPlus1);

// Exercice 5 //

let array = [1,2,3,4,5,6,7,8,9,10];

function displayElementsArray(array){
  let i = 0;
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    if (currentElmt % 2 === 0) {
      console.log(currentElmt + " is an even number.");
    } else {
      console.log(currentElmt + " is an odd number");
    }
  }
}

displayElementsArray(array);

// Exercice 6 //

let array = [1,2,3,4,5,6,7,8,9,10];

function sumElementsArray(array) {
  let i = 0;
  let currentElmt;
  let sum = 0;
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    sum += currentElmt; // make sum of numbers
  }
  return sum;
}

let sum = sumElementsArray(array);
console.log(sum);

// Exercice 7 //

let array = [1,2,3,4,5,6,7,8,9,10];

function evenElementsOfArray(array) {
  let i = 0;
  let currentElmt;
  let nbEvenElements = 0;
  while (i < array.length) {
    currentElmt = array[i];
    i = i + 1;
    if (currentElmt % 2 === 0) { // mark even number
      nbEvenElements + 1;
    }
  }
  return nbEvenElements; // count how many there is even number
}

let nbEvenElements = evenElementsOfArray(array);
console.log(nbEvenElements);

// Exercice 8 //

let array = [39,1,2,3,4,5,6,7,8,9,10];

function maxValueArray(array) {
  let i = 0;
  let currentElmt;
  let maxValue = array[0]; // Initialise maxValue with the first element of the array
  while (i < array.length) {
    i++;
    currentElmt = array[i];
    if(currentElmt > maxValue){
      maxValue = currentElmt;
    }
  }
  return maxValue;
}

let maxValue = maxValueOfArray(array);
console.log(maxValue);

// Exercice 9 //

let array = [10,1,2,3,4,5,100,6,7,8,9,10,98];

function displayMaxAndMinValuesOfArray(array){
  let i = 0;
  let currentElmt;
  // initialise maxValue and minValue
  let maxValue = array[0];
  let minValue = array[0];
  while (i < array.length) {
    i++;
    currentElmt = array[i];
    if(currentElmt > maxValue){
      maxValue = currentElmt;
    }
    if (currentElmt < minValue) {
      minValue = currentElmt;
    }
  }
  console.log("Minimum = "+ minValue);
  console.log("Maximum = "+ maxValue);
}


displayMaxAndMinValuesOfArray(array);

// Exercice 10 //

let array = [1,2,3,4,5,6,7,8,9,10];
let array2 = [5,4,9,7,70,1,58,2,96];


function isOrdered(array){
  let i = 1;
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i];
    if(currentElmt < array[i-1]){
      return false;
    }
    i++;
  }
  return true;
}

// Exercice 11 //

let array = [10,1,2,3,4,1,2,5,9,1,2,3,10];

function copyArrayOfOneElement(array) {
  let i = 0; // for array
  let currentElmt;
  let copyArray = [];
  let j; // for copyArray
  let canCopy; // to know if I can copy the currentElmt on the copyArray
  copyArray.push(array[0]); // first element
  while (i+1 < array.length) {
    currentElmt = array[i+1];
    i = i + 1;
    j = 0;
    canCopy = true;
    while (j < copyArray.length) {
      if (currentElmt === copyArray[j]) {
        // verify if the number is already on the copyArray
        canCopy = false;
      }
      j++;
    }
    if (canCopy) {
      copyArray.push(currentElmt);
    }
  }
  return copyArray;
}

let copyArray = copyArrayOfOneElement(array);

function displayElementsArray(array) {
  let i = 0;
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    console.log(currentElmt);
  }
}

displayElementsArray(copyArray);


console.log(isOrdered(array));
console.log(isOrdered(array2));

// Exercice 12 //

let array = [1,2,3,4,5,6,7,8,9,10];

function inverseArray(array) {
  let i = 0;
  let currentElmt;
  let copyArray = [];

  while (i < array.length) {
    currentElmt = array.length - 1 - i;
    copyArray.push(array[currentElmt]);
    i++;
  }
  return copyArray;
}

let copyArray = inverseArray(array);

function displayElementsArray(array) {
  let i = 0;
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i];
    i = i + 1;
    console.log(currentElmt);
  }
}

displayElementsArray(copyArray);

// Exercice 13 //

let array1 = [1,2,3,4,5,6,7,8,9,10];
let array2 = [31,32,33,34,35,36,37,38,39,40];

function concatenateTwoArrays(array1, array2) {
  let i = 0;
  let currentElmt;
  let concatenateArrays = [];

  while (i < array1.length) {
    currentElmt = array1[i];
    i++;
    concatenateArrays.push(currentElmt);
  }

  i = 0;

  while (i < array1.length) {
    currentElmt = array2[i];
    i++;
    concatenateArrays.push(currentElmt);
  }

  return concatenateArrays;
}


let concatenateArrays = concatenateTwoArrays(array1, array2);

function displayElementsArray(array) {
  let i = 0;
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    console.log(currentElmt);
  }
}

displayElementsArray(concatenateArrays);


// Exercice 14 //

let array = ["jambon","beurre","affiche","ordinateur","chaise","poutre"];

function returnWordsWithVowel(array) {
  let i = 0;
  let currentElmt;
  let beginWithAVowel;
  let wordsBeginsWithAVowel = [];

  while (i < array.length) {
    currentElmt = array[i];
    i++;
    beginWithAVowel = itBeginsWithAVowel(currentElmt);
    if (beginWithAVowel) {
      wordsBeginsWithAVowel.push(currentElmt);
    }
  }

  return wordsBeginsWithAVowel;
}

function itBeginsWithAVowel(word) {
  if (word.charAt(0).toUpperCase() === 'A' ||
    word.charAt(0).toUpperCase() === 'E' ||
    word.charAt(0).toUpperCase() === 'I' ||
    word.charAt(0).toUpperCase() === 'O' ||
    word.charAt(0).toUpperCase() === 'U' ||
    word.charAt(0).toUpperCase() === 'Y') {
    return true;
  } else {
    return false;
  }
}


let arrayWithOnlyWordsBeginWithAVowel = returnWordsWithVowel(array);

function displayElementsArray(array) {
  let i = 0;
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    console.log(currentElmt);
  }
}

displayElementsArray(arrayWithOnlyWordsBeginWithAVowel);


// Exercice 14bis //

let word = "jambon";

function palindrome(string){
  let i = 0;
  let currentElmt;
  let currentElmt2;

  while(i < string.length / 2){
    currentElmt = string[i];
    currentElmt2 = string[string.length-1-i];
    i++;

    if(currentElmt != currentElmt2){
      return false;
    }
  }
  return true;
}

console.log(palindrome(word));


// Exercice 15 //

let word1 = "Janis";
let word2 = "Myriam";

function anagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  } else {
    let string1Split = string1.split("");
    let string2Split = string2.split("");
    string1Split.sort();
    string2Split.sort();
    let i = 0;
    while (i < string1Split.length) {
      if(string1Split[i] !== string2Split[i]){
        return false;
      }
      i = i + 1;
    }
    return true;
  }
}

console.log(anagram(word1, word2));
