// Q. bubble sort

// [2, 3, 5, 8, 0, 6]
// first iteration
// [2, 3, 5, 0, 6, 8]

function bubbleSort<T extends number[]>(array: T): T {
  const len = array.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

function swap(array: number[], fp: number, sp: number) {
  [array[fp], array[sp]] = [array[sp], array[fp]];
}

// [7, 4, 8, 4, 5]

function insertionSort<T extends number[]>(array: T): T {
  const len = array.length;

  for (let i = 1; i < len; i++) {
    const temp = array[i];

    let j = i - 1;
    while (j >= 0 && temp < array[j]) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = temp;
  }

  return array;
}

function selectionSort<T extends number[]>(array: T): T {
  const len = array.length;

  for (let i = 0; i < len - 1; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(array, min, i);
    }
  }

  return array;
}

function partition(array: number[], low: number, high: number) {
  const pivot = array[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (array[i] <= pivot) i++;
    while (array[j] > pivot) j--;
    if (i < j) {
      swap(array, i, j);
    }
  }
  swap(array, low, j);
  return j;
}

function quickSort<T extends number[]>(
  array: T,
  low = 0,
  high = array.length - 1,
): T {
  if (low < high) {
    const pivot = partition(array, low, high);
    quickSort(array, low, pivot - 1);
    quickSort(array, pivot + 1, high);
  }
  return array;
}

function merge<T extends number[]>(
  array: T,
  left: number,
  mid: number,
  right: number,
): T {
  const result = array.filter(Boolean);
  let i = left;
  let j = mid + 1;
  let k = left;

  while (i <= mid && j <= right) {
    if (array[i] < array[j]) {
      result[k] = array[i];
      i++;
    } else {
      result[k] = array[j];
      j++;
    }
    k++;
  }

  if (i > mid) {
    while (j <= right) {
      result[k] = array[j];
      j++;
      k++;
    }
  } else {
    while (i <= mid) {
      result[k] = array[i];
      i++;
      k++;
    }
  }

  for (let i = left; i <= right; i++) {
    array[i] = result[i];
  }

  return array;
}

function mergeSort<T extends number[]>(
  array: T,
  left = 0,
  right = array.length - 1,
): T {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    merge(array, left, mid, right);
  }
  return array;
}

export {};
