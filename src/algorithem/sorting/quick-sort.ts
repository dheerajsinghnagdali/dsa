import { swap } from "./bubble-sort.ts";

export function partition(nums: number[], low: number, high: number): number {
  const pivot = nums[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (nums[i] <= pivot) i++;
    while (nums[j] > pivot) j--;
    if (i < j) {
      swap(nums, i, j);
    }
  }
  swap(nums, low, j);
  return j;
}

export function quickSort<TArray extends number[]>(
  nums: TArray,
  low = 0,
  high = nums.length - 1,
): TArray {
  if (low < high) {
    const pivot = partition(nums, low, high);
    quickSort(nums, low, pivot - 1);
    quickSort(nums, pivot + 1, high);
  }
  return nums;
}
