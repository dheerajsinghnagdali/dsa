export function swap<TArray extends number[]>(
  array: TArray,
  f: number,
  s: number,
) {
  [array[f], array[s]] = [array[s], array[f]];
}

export function bubbleSort<TArray extends number[]>(nums: TArray): TArray {
  const len = nums.length;

  for (let i = 0; i < len - 1; i++) {
    let swapped = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        swapped = true;
      }
    }

    if (swapped) {
      swapped = false;
    } else {
      break;
    }
  }
  return nums;
}
