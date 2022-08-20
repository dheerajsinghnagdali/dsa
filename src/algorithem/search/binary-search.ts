function binarySearch<T>(array: T[], target: T): number {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) >> 1);
    if (target === array[mid]) {
      return mid;
    }
    if (target < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

function recursiveBinarySearch<T>(
  array: T[],
  target: T,
  left = 0,
  right = array.length - 1,
): number {
  if (left > right) {
    return -1;
  }
  const mid = Math.floor((left + right) >> 1);
  if (target === array[mid]) {
    return mid;
  }
  if (target < array[mid]) {
    return recursiveBinarySearch(array, target, left, mid - 1);
  }
  return recursiveBinarySearch(array, target, mid + 1, right);
}

export {};
