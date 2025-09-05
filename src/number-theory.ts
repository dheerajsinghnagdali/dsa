// Find the factorial of given number?

// Input: natural numbers 1, 2, 3...
// Output: factorial of a number

// factorial(0) -> 1
// factorial(1) -> 1
// factorial(2) -> 2
// factorial(3) -> 6

// Formula for finding factorial: n! = n*(n-1)*(n-2)*...3*2*1
// Create a result variable and assign that variable to 1
// Start a loop from given num and stop when i is less than and equal to 1
// Each time subtract 1 from i
// Each time multiply i with result
// If num is zero return 1 and don't run loop

export function factorial(num: number): number {
  let result = 1;

  for (let i = num; i > 1; i--) {
    result = result * i;
  }

  return result;
}

// Given an integer n, write a export function  that returns count of trailing zeroes in n!

// Input: integers
// Output: trailing zeros in factorial of given number

// trailingZeroInFactorial(5): 1
// trailingZeroInFactorial(4): 0

// A trailing zero is always produced by prime factor 2 and 5.
// When the input is 5, there are one 5s and three 2s
// We can easily observe that the number of 2s in prime factors is always more than or equal to the number 5s.
// A simple way to calculate is by floor((n/5)), but number like 25, 125 have more than one five, 25/5 -> 5 but in 25! there are 6 five exist
// Formula: n/5 + n/25 + n/125 + ...
// Assign numOfTrailingZeroes to 0
// Start a while loop from 1 and check if given number is greater and equal to i * 5
// Assign i to i * 5
// Add the result of floor(num/i) into numOfTrailingZeroes

export function numOfTrailingZeroesInNumFactorial(num: number): number {
  let numOfTrailingZeroes = 0;

  let i = 1;
  while (num >= i * 5) {
    i = i * 5;
    numOfTrailingZeroes = numOfTrailingZeroes + Math.floor(num / i);
  }

  return numOfTrailingZeroes;
}

// Given an integer, write a export function  that returns true if the given number is palindrome, else false.

// Input: integer
// Output: if number is palidrome number return true else false

// isPalindrome(202) -> true
// isPalindrome(23) -> false
// isPalindrome(0) -> true

// One way is to reverse number and check if they are equal or not
// Start one pointer from front and one from end
// Check if left pointer value is equal or less than right point value
// If not return false
// If right pointer value is less then left pointer value return true

export function isPalindrome(num: number): boolean {
  let left = 0;
  let right = String(num).length - 1;

  while (left < right) {
    if (Number(String(num)[left]) === Number(String(num)[right])) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

// Sieve of eratosthenes, Given a number n, print all primes smaller than or equal to n. It is also given that n is small number.

// Input: natural numbers
// Output: prime number

// If `num` is prime, it means that there is no factor exit between 1 to `num`^1/2

export function sieveOfEratosthenes(num: number): boolean[] {
  const isPrime = Array(num + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= num; i++) {
    for (let j = i * 2; j < isPrime.length; j = j + i) {
      isPrime[j] = false;
    }
  }

  return isPrime;
}

/**
 * GCD
 * Input: both are numbers
 * Output: greatest common factor
 */

export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

// Power-two algorithm

export function powerTwo(n: number) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if ((n & 1) !== 0) {
      return false;
    }
    n = n >> 2;
  }
  return true;
}
