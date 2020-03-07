import { expect } from "chai";
import { ListNode, addTwoNumbers } from './add-two-numbers';

describe('add-two-numbers', () => {
  it('should return Output: 7 -> 0 -> 8 for given inputs (2 -> 4 -> 3) + (5 -> 6 -> 4)', () => {
    const l1 = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(3);

    const l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);

    const result = addTwoNumbers(l1, l2);

    expect(result.val).eq(7);
    expect(result.next ? result.next.val : null).eq(0);
    expect(result.next && result.next.next ? result.next.next.val : null).eq(8);
  });

  it('should return Output: 0 -> 1 for given inputs (5) + (5)', () => {
    const l1 = new ListNode(5);

    const l2 = new ListNode(5);

    const result = addTwoNumbers(l1, l2);

    expect(result.val).eq(0);
    expect(result.next ? result.next.val : null).eq(1);
  });
});
