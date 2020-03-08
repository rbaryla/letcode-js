/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = (s: string): number => {

  let result = 0;
  const sLength = s.length;
  let currStr = '';

  for(let i = 0; i < sLength; i++) {
    const currChar = s.charAt(i);
    const currCharIndex = currStr.indexOf(currChar)

    if (currCharIndex !== -1) {
      result = Math.max(result, currStr.length, lengthOfLongestSubstring(s.substring(currCharIndex + 1)));
      break;
    }
    currStr += currChar;
  }
  result = Math.max(result, currStr.length);

  return result;

};
