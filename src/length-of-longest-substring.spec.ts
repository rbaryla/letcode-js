import { expect } from "chai";
import { lengthOfLongestSubstring } from './length-of-longest-substring';

describe('lengthOfLongestSubstring', () => {
  it('should return 3 for input: abcabcbb', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).eq(3);
  });

  it('should return 1 for input: bbbbb', () => {
    expect(lengthOfLongestSubstring('bbbbb')).eq(1);
  });

  it('should return 3 for input: pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).eq(3);
  });

  it('should return 1 for input: " "', () => {
    expect(lengthOfLongestSubstring(' ')).eq(1);
  });

  it('should return 18 for input: gzdrgocdtidpxmucbqojrghfel', () => {
    expect(lengthOfLongestSubstring('gzdrgocdtidpxmucbqojrghfel')).eq(18);
  });
});
