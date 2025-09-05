// Odd or even

// Input: positive integer
// Output: odd or even

// oddEven(0): even
// oddEven(1): odd

// 1 -> 001
// 2 -> 010
// 3 -> 011
// 4 -> 100

// At the end of a odd number, we get 1 in binary
// At the end of a even number, we get 0 in binary

export function oddEven(num: number): "odd" | "even" {
  if ((num & 1) === 0) {
    return "even";
  }
  return "odd";
}

// Swap two numbers.

// Input: two numbers
// Output: swaped numbers

// swap(12, 23): {f: 23, s: 12}

// 2 -> 010
// 3 -> 011
// f = 2 ^ 3
/**
 * 010
 * 011
 * ----
 * 001
 */
// s = 001 ^ 011
/**
 * 001
 * 011
 * ----
 * 010
 */
// f = 001 ^ 010
/**
 * 001
 * 010
 * ----
 * 011
 */

type Restrict<T> = keyof T extends "f" | "s" ? { f: number; s: number } : never;

export function swap<T extends Restrict<T>>(options: T): T {
  let { f, s } = options;
  f = f ^ s;
  s = f ^ s;
  f = f ^ s;

  return {
    f,
    s,
  } as T;
}

// Find bit at nth position

// Input: number
// Output: bit

// Make a mask by left shifting all the digits until nth position
// Do a &(and) operation between mask and number, and return this

export function findBit(num: number, at: number) {
  const mask = 1 << at;

  if ((mask & num) === 0) {
    return 0;
  }
  return 1;
}

// Set bit
// Input: num: number, at: number
// Output: set bit number

// setBit(2, 0): 3

// Make a mask by left shifting all the digits until nth position
// Do the or operation between mask and number and return the result

export function setBit(num: number, at: number) {
  const mask = 1 << at;
  return num | mask;
}

// Clear bit

// Input: num: number, at: number
// Output: clear bit number

// clearBit(2, 1): 0

// Make a mask by left shifting all the digits until nth position after that invert all bits
// Do the &(and) operation between num and mask

export function clearBit(num: number, at: number) {
  const mask = ~(1 << at);
  return num & mask;
}

// Find the only non-repeating element in an array where every element repeat twice

export function findUnique(arr: number[]): number {
  let unique = 0;
  for (const num of arr) {
    unique = num ^ unique;
  }

  return unique;
}

// Find two non-repeating elements in an array where every element repeat twice

export function findTwoUnique(arr: number[]): [number, number] {
  let finalXOR = 0;

  for (const num of arr) {
    finalXOR = finalXOR ^ num;
  }

  const rightBit = finalXOR & ~(finalXOR - 1);

  let a = 0;
  let b = 0;
  for (const num of arr) {
    if (num & rightBit) {
      a = a ^ num;
    } else {
      b = b ^ num;
    }
  }

  return [a, b];
}

// Find number of bits to change to convert a to b

export function countBitsFlip(f: number, s: number): number {
  let xor = f ^ s;

  let count = 0;
  while (xor) {
    if (xor & 1) {
      count++;
    }
    xor = xor >> 1;
  }

  return count;
}
