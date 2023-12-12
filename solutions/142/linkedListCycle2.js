/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
  if (head == null) {
    return null;
  }
  // create 2 pointers for slow and fast and point them to head
  let slow = head;
  let fast = head;
  // this will be set to true if slow == fast
  let hasCycle = false;

  // if slow and fast meet, a cycle exists.
  // while fast.next or fast.next.next isn't null - if a cycle didn't exist, eventually fast.next or fast.next.next would be null due to the fact that there would be an end to the ListNode, which means the end would have to point to null
  while (fast.next != null && fast.next.next != null) {
    fast = fast.next.next;
    slow = slow.next!;

    // if slow and fast meet, there's a cycle. set slow to head and break the while loop 
    if (slow == fast) {
      hasCycle = true;
      slow = head;
      break;
    }
  }

  // if we reach this point and there's no cycle, that means that null is the final next in the ListNode.
  if (!hasCycle) {
    return null;
  }

  // push both slow and fast each up one node until they meet.
  while (slow != fast) {
    slow = slow.next!;
    fast = fast.next!;
  }

  // return our start of cycle node.
  return slow;
}
