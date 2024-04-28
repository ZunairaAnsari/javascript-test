// Name :Zunaira
// Roll no: WMA-136500

// Question # 01: Given an integer array nums, find a subarray that has the largest
// product, and return the product

function maxProduct(nums) {
    if (!nums.length) return 0;

    let maxProd = nums[0];
    let minProd = nums[0];
    let result = maxProd;

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        maxProd = Math.max(num, maxProd * num);
        minProd = Math.min(num, minProd * num);

        result = Math.max(result, maxProd);
    }

    return result;
}

const myNums = [2, 3, -3, 4];
console.log(maxProduct(myNums));



// Question # 02: Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the
// same element twice.

function twoSum(nums, target) {
    
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (numMap.hasOwnProperty(complement)) {
    
            return [numMap[complement], i];
        }

        numMap[num] = i;
    }


    return null;
}


const nums = [2, 7, 11, 15];
const target = 9;
const resultIndices = twoSum(nums, target);
console.log(resultIndices); 

// Question # 03: Reverse each word in a given input string.

let myStr = prompt('Enter any of your desired parameters');

function reverseString(str) {
   
    var reversedStr =  str.split(' ').map( item => item.split('').reverse().join('')).join(' ');
    return reversedStr;
}
 
let func = reverseString(myStr);
alert(func);

// Question # 04: Write a JavaScript program to display the reading status (i.e. display
//     book name, author name and reading status) of the following books.
    
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

function displayReadingStatus(library) {
    for (var i = 0; i < library.length; i++) {
        var book = library[i];
        var status = book.readingStatus ? "already read" : "not read yet";
        console.log("Book: " + book.title + ", Author: " + book.author + ", Status: " + status);
    }
}

displayReadingStatus(library);

// Question # 05:
// Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.


function amountToCoins(amount, coins) {
    coins.sort((a, b) => b - a);
  
    let result = [];
    let remainingAmount = amount;
  
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
  
      while (remainingAmount >= coin) {
        result.push(coin);
        remainingAmount -= coin;
      }
  
      if (remainingAmount === 0) {
        break; 
      }
    }
  
    return result;
  }
  
  const amount = 46;
  const coins = [25, 10, 5, 2, 1];
  const coinsUsed = amountToCoins(amount, coins);
  console.log(coinsUsed); 
  