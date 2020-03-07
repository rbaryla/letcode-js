

export class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

export const addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
  const num1 = l1 ? l1.val : 0;
  const num2 = l2 ? l2.val : 0;

  const currSum = num1 + num2;
  const result = new ListNode(currSum);
  if (currSum >= 10) {
    result.val = currSum - 10;
  }

  if (!l1.next && !l2.next && currSum < 10) {
    return result;
  }

  const l1Next = l1.next ? l1.next : new ListNode(0);
  const l2Next = l2.next ? l2.next : new ListNode(0);

  if (currSum >= 10) {
    l1Next.val++;
  }

  result.next = addTwoNumbers(l1Next, l2Next);
  return result;

};






