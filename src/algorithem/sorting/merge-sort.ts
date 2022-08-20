function merge<TArray extends number[]>(
  nums: TArray,
  left: number,
  mid: number,
  right: number,
): TArray {
  const result = nums.filter(Boolean);
  let i = left;
  let j = mid + 1;
  let k = left;

  while (i <= mid && j <= right) {
    if (nums[j] > nums[i]) {
      result[k] = nums[i];
      i++;
    } else {
      result[k] = nums[j];
      j++;
    }
    k++;
  }

  if (i > mid) {
    while (j <= right) {
      result[k] = nums[j];
      j++;
      k++;
    }
  } else {
    while (i <= mid) {
      result[k] = nums[i];
      i++;
      k++;
    }
  }

  for (let i = left; i <= right; i++) {
    nums[i] = result[i];
  }

  return nums;
}

function mergeSort<TArray extends number[]>(
  nums: TArray,
  left = 0,
  right = nums.length - 1,
): TArray {
  if (left < right) {
    const mid = Math.floor((left + right) >> 1);
    mergeSort(nums, left, mid);
    mergeSort(nums, mid + 1, right);
    merge(nums, left, mid, right);
  }
  return nums;
}

export {};
