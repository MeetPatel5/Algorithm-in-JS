import "../assets/main.scss";

// 1. String Reversal
import {
  reverseString1,
  reverseString2,
  reverseString3,
  reverseString4
} from "./string-reversal/string-reversal";

console.log(reverseString1("Hello"));
console.log(reverseString2("Meet"));
console.log(reverseString3("Patel"));
console.log(reverseString4("Meet Patel"));
console.clear();

// 2. Palindrome
import { checkPalindrome1, checkPalindrome2 } from "./palindromes/palindromes";

console.log(checkPalindrome1("Saras"));
console.log(checkPalindrome2("MALayAlaM"));
console.clear();

// 3. MaxChar problem
import { getMaxChar } from "./max-chars/max-chars";

console.log(getMaxChar("Hello there, I am Meet"));
console.clear();

// 4. FizzBuzz problem
import { fizzBuzz } from "./fizz-buzz/fizz-buzz";
fizzBuzz(35);
console.clear();

// 5. Array Chunk
import { chunkArr } from "./array-chunking/array-chunking";
console.log(chunkArr([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.clear();

// 6. Unique Array
import { uniqueArr } from "./unique-array/unique-array";
console.log(uniqueArr([1, 1, 2, 3, 3, 4, 5, 5, 5, 5, 6, 6]));
console.clear();

// 7. Array Sorting
import {
  sortByAsce,
  sortByDesc,
  sortByGreaterValue,
  sortBySmallerValue
} from "./array-sort/common-sort";
// console.log(sortByAsce(["hi", "bye", "old", "whatever", 5, true])); => will throw an err as there are non string type of ele are presents
// console.log(sortByDesc(["hi", "bye", "new", "old", "whatever", 2])); => will throw an err as there are non string type of ele are presents
console.log(sortByAsce(["hi", "bye", "old", "whatever"]));
console.log(sortByDesc(["hi", "bye", "new", "old", "whatever"]));

// console.log(
//   sortByGreaterValue([100, "25", 4165, true, 6565, 654, 4458, 66, 448])
// ); =>  will throw an err as there are non number type of  ele are presents
// console.log(
//   sortBySmallerValue([564, "55", false, 4563, 31, 25, 45, 6541, 54165])
// );  =>  will throw an err as there are non number type of  ele are presents
console.log(sortByGreaterValue([100, 25, 4165, 12, 6565, 654, 4458, 66, 448]));
console.log(sortBySmallerValue([564, 55, 654, 4563, 31, 25, 45, 6541, 54165]));
console.clear();

// 8. Check Anagram
import { checkAnagram1, checkAnagram2 } from "./anagram/anagram";
console.log(checkAnagram1("dff   ", " !ffD"));
console.log(checkAnagram2("dff  ", " !fFD"));
console.log(checkAnagram2("dff  ", " !DfD"));
console.clear();

// 9. Capitalization
import {
  capitalizeStr1,
  capitalizeStr2
} from "./string-capitalization/string-capitalization";
console.log(capitalizeStr1("Hi, there HOW yOu DOinG !!"));
console.log(capitalizeStr2("Hi, there HOW yOu DOinG !!"));
