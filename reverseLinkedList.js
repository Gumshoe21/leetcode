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

function reverseList(l: ListNode | null): ListNode | null {
  // If the list is empty, then return the empty list.
  if (!l) return l
  // Create new ListNode and a pointer to it.
  let curr = new ListNode(0, null)
  let head = curr
  // We push our listnode vals into this orderArr
  let arr = []
  while (l) {
    arr.push(l.val)
    l = l.next
  }
  // We traverse the array in reverse order and create our ListNode node by node.
  for (let i = arr.length; i > 0; i--) {
    curr.val = arr[i]
    curr.next = new ListNode(arr[i - 1], null)
    curr = curr.next
  }
  return head.next
}

/*
ALT ANSWER
var reverseList = function(head) {
    if(head === null) return head;
    let arr = [];
    while (head) {
        arr.push(head)
        head = head.next;
    }    
        console.log(arr)
    arr[0].next = null;
    console.log(arr)
    for (let i = 1; i < arr.length; i++) {
        arr[i].next = arr[i-1]
        console.log('ITERATION', i)
        console.log(arr)
    }
    return arr[arr.length-1];
};
*/
