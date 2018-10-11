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
