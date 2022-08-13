// Q. bubble sort

// [2, 3, 5, 8, 0, 6]
// first iteration
// [2, 3, 5, 0, 6, 8]

function bubbleSort<T extends number[]>(arr: T): T {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

function swap(arr: number[], fp: number, sp: number) {
  [arr[fp], arr[sp]] = [arr[sp], arr[fp]];
}

// [7, 4, 8, 4, 5]

function insertionSort<T extends number[]>(arr: T): T {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    const temp = arr[i];

    let j = i - 1;
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = temp;
  }

  return arr;
}

function selectionSort<T extends number[]>(arr: T): T {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(arr, min, i);
    }
  }

  return arr;
}

export {};
