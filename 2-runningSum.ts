function runningSum(nums: number[]): number[] {
  let result: number[] = [];

  const tempArr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    tempArr.push(currentNum);

    const currentSum = tempArr.reduce((a, b) => a + b, 0);

    result.push(currentSum);
  }

  return result;
}
