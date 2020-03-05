export const twoSum = (nums: number[], target: number): number[] => {

  for (const [index, value] of nums.entries()) {
    const result = nums.slice(index +1).indexOf(target - value);

    if (result !== -1) {
      return [index, index + result + 1];
    }
  }

  throw new Error('No result found');
};
