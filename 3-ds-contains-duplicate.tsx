//checks if an array has dublicated values

function containsDuplicate(nums: number[]): boolean {
  const mySet = new Set(nums);
  return mySet.size !== nums.length;
}

let x = containsDuplicate([1, 2, 3, 1]);
x;

function containsDuplicate2(nums: number[]): boolean {
  const mynums = new Set();
  for (const num of nums) {
    if (mynums.has(num)) return true;
    mynums.add(num);
  }
  return false;
}

let y = containsDuplicate2([1, 2, 3, 4, 4]);
y;

function containsDuplicate3(nums: number[]): boolean {
  const mynums: Map<number, any> = new Map();
  for (const num of nums) {
    if (mynums.has(num)) return true;
    mynums.set(num, 1);
  }
  return false;
}

let z = containsDuplicate3([1, 2, 3, 4, 5]);
z;
