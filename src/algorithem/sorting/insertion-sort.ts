export function insertionSort<TArray extends number[]>(nums: TArray): TArray {
  for (let i = 1; i < nums.length; i++) {
    const temp = nums[i];

    let j = i - 1;
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = temp;
  }
  return nums;
}
