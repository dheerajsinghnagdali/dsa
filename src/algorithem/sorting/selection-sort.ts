import { swap } from "./bubble-sort";

function selectionSort<TArray extends number[]>(nums: TArray): TArray {
  const len = nums.length;

  for (let i = 0; i < len - 1; i++) {
    let min = i;

    let j = i + 1;
    while (j < len) {
      if (nums[min] > nums[j]) {
        min = j;
      }
      j++;
    }
    if (min !== i) {
      swap(nums, min, i);
    }
  }
  return nums;
}

console.log(selectionSort([1, 2, 0, 4, -1]));

export {};
