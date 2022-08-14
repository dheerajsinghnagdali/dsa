/**
 * 3 steps for recursion
 * 1. find the base case
 * 2. find the relation between the problem and sub-problems
 * 3. generalise the relation
 */

// Q. find the sum of n natural numbers using recursion

function sum(num: number): number {
  if (num === 1) {
    return 1;
  }

  return num + sum(num - 1);
}

// Q. calculate a^b using recursion

function findPow(num: number, pow: number): number {
  if (pow === 0) {
    return 1;
  }
  return num * findPow(num, pow - 1);
}

export {};
