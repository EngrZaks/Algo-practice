function pivotIndex(nums: number[]): number {
  let result: number = 0;
  let leftSum = 0,
    sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);

  for (let j = 0; j < nums.length - 1; j++) {
    if (leftSum == sum - leftSum - nums[j]) return j;
    leftSum += nums[j];
  }
  return -1;
}
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

// function things(arr:number[]):number {
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     return[element]
//   }
// }
// console.log(things([1, 7, 3, 6, 5, 6]));

// const pivotIndex = (nums) => {
//   // We have not started our program yet, so values are at 0
//   let rightSum = 0;
//   let leftSum = 0;

//   // Calculate the sum of the entire array
//   // O(n)
//   nums.forEach((v) => (rightSum += v));

//   // O(n)
//   for (var i = 0; i <= nums.length - 1; i++) {
//     let curr = nums[i];

//     // The right sum no longer contains the curr number
//     rightSum -= curr;

//     // if left sum equals right sum, we return index
//     if (leftSum === rightSum) return i;

//     // We did not find a match
//     // Left sum now contains our curr number
//     leftSum += curr;
//   }

//   return -1;
// };
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
