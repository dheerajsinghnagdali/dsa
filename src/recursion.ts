/**
 * 3 steps for recursion
 * 1. find the base case
 * 2. find the relation between the problem and sub-problems
 * 3. generalize the relation
 */

// Find the sum of n natural numbers using recursion

export function sum(num: number): number {
  if (num === 1) {
    return 1;
  }
  return num + sum(num - 1);
}

// Calculate a^b using recursion

export function findPow(num: number, pow: number): number {
  if (pow === 0) {
    return 1;
  }
  return num * findPow(num, pow - 1);
}

// Find the ways in m*n matrix we can go in only bottom and right direction

export function matrixPaths(row: number, col: number): number {
  if (row === 0 || col === 0) {
    return 1;
  }
  return matrixPaths(row - 1, col) + matrixPaths(row, col - 1);
}

// Josephus problem, matrix paths

export function josephus(n: number, k: number): number {
  if (n === 1) {
    return 0;
  }
  return (josephus(n - 1, k) + k) % n;
}

// Check given string is palindrome string

export function isPalindrome(
  str: string,
  left = 0,
  right = str.length - 1,
): boolean {
  if (left >= right) {
    return true;
  }
  if (str[left] !== str[right]) {
    return false;
  }
  return isPalindrome(str, left + 1, right - 1);
}

// Print the powerset of a given string

/**
 *                     abc
 *                   /    \
 *                  a      ""
 *                /  \
 *               ab   a
 *             /  \
 *            abc  ab
 */

export function powerSet(str: string, i = 0, curr = ""): void {
  if (i === str.length) {
    console.log(curr);
    return;
  }
  powerSet(str, i + 1, curr + str[i]);
  powerSet(str, i + 1, curr);
}

// Fibonacci sequence
/**
 * fn(0) -> 0
 * fn(1) -> 1
 */
export function recursiveFibonacci(n: number): number {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

export function factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
