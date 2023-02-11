function searchInsert(nums: number[], target: number): number {
  let low = 0,
    high = nums.length - 1,
    mid: number;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) high = mid - 1;
    else if (target > nums[mid]) low = mid + 1;
  }
  return low;
}
