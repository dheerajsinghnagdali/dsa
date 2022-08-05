// Q. find the factorial of given number?

// input: natural numbers 1, 2, 3...
// output: factorial of a number

// factorial(0) -> 1
// factorial(1) -> 1
// factorial(2) -> 2
// factorial(3) -> 6

// formula for finding factorial: n! = n*(n-1)*(n-2)*...3*2*1
// create a result variable and assign that variable to 1
// start a loop from given num and stop when i is less than and equal to 1,
// each time subtract 1 from i
// each time multiply i with result
// if num is zero return 1 and don't run loop

function factorial(num: number): number {
  let result = 1;

  for (let i = num; i > 1; i--) {
    result = result * i;
  }

  return result;
}

// Q. given an integer n, write a function that returns count of trailing zeroes in n!

// input: integers
// output: trailing zeros in factorial of given number

// trailingZeroInFactorial(5): 1
// trailingZeroInFactorial(4): 0

// A trailing zero is always produced by prime factor 2 and 5.
// input: 5 There are one 5s and three 2s
// We can easily observe that the number of 2s in prime factors is always more than or equal to the number 5s.
// a simple way to calculate is by foor((n/5)), but number like 25, 125 have more than one five, 25/5 -> 5 but in 25! there are 6 five exist
// formula n/5 + n/25 + n/125 + ...
// assign numOfTrailingZeroes to 0
// start a while loop from 1 and check if given number is greater and equal to i * 5
// assign i to i * 5
// add the result of floor(num/i) into numOfTrailingZeroes

function numOfTrailingZeroesInNumFactorial(num: number): number {
  let numOfTrailingZeroes = 0;

  let i = 1;
  while (num >= i * 5) {
    i = i * 5;
    numOfTrailingZeroes = numOfTrailingZeroes + Math.floor(num / i);
  }

  return numOfTrailingZeroes;
}
