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
