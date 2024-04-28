// . Write a function which checks if string is palindrom
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and
// removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

let str = "A man, a plan, a canal: Panama";

function isPalindrom(str) {
    let newStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    console.log(newStr);
}

isPalindrom(str);



function isPalindromeCheck(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }
}
 
let str1 = "raceacar";
let str2 = "amanaplanacanalpanama";

console.log(isPalindromeCheck(str1));
console.log(isPalindromeCheck(str2));



