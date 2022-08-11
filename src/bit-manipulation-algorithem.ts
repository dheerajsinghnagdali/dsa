// Q. odd or even

// input: positive integer
// output: odd or even

// oddEven(0): even
// oddEven(1): odd

// 1 -> 001
// 2 -> 010
// 3 -> 011
// 4 -> 100

// at the end of a odd number we get 1 in binary
// at the end of a even number we get 0 in binary

function oddEven(num: number): "odd" | "even" {
  if ((num & 1) === 0) {
    return "even";
  }
  return "odd";
}

// Q. swap two numbers.

// input: two numbers
// output: swaped numbers

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

function swap<T extends Restrict<T>>(options: T): T {
  let { f, s } = options;
  f = f ^ s;
  s = f ^ s;
  f = f ^ s;

  return {
    f,
    s,
  } as T;
}

// Q. find bit at nth position

// input: number
// output: bit

// make a mask by left shifting all the digits until nth position
// do a &(and) operation between mask and number, and return this

function findBit(num: number, at: number) {
  const mask = 1 << at;

  if ((mask & num) === 0) {
    return 0;
  }
  return 1;
}

// Q. set bit
// input: num: number, at: number
// output: set bit number

// setBit(2, 0): 3

// make a mask by left shifting all the digits until nth position
// do the or operation between mask and number and return the result

function setBit(num: number, at: number) {
  const mask = 1 << at;
  return num | mask;
}

// Q. clear bit

// input: num: number, at: number
// ouput: clear bit number

// clearBit(2, 1): 0

//  make a mask by left shifting all the digits until nth position after that invert all bits
// do the &(and) operation between num and mask

function clearBit(num: number, at: number) {
  const mask = ~(1 << at);
  return num & mask;
}

// Q. find the only non-repeating element in an array where every element repeat twice

function findUnique(arr: number[]): number {
  let unique = 0;
  for (const num of arr) {
    unique = num ^ unique;
  }

  return unique;
}

// Q. Find two non-repeating elements in an array where every element repeat twice

function findTwoUnique(arr: number[]): [number, number] {
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

// Q. find number of bits to change to convert a to b

function countBitsFlip(f: number, s: number): number {
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
