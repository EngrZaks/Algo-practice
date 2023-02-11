// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

//SOLUTION

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
