import { expect } from "chai";
import { twoSum } from './two-sum';

describe('twoSum', () => {
  it('returns [0, 1] for given nums = [2, 7, 11, 15], target = 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).eql([0, 1])
  });
});
