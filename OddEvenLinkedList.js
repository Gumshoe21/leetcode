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

function oddEvenList(l: ListNode | null): ListNode | null {
  let oddNode = new ListNode(0, null)
  let evenNode= new ListNode(0, null)
  let refOdd = oddNode 
  let refEven = evenNode
  let position = 1

  while (l) {
    if (position === 1) {
      oddNode.next = l
      oddNode = oddNode.next
      position = 2
    } else if (position === 2) {
      evenNode.next = l
      evenNode = evenNode.next;
      position = 1
    }
    l = l.next
  }
  console.log(oddNode,refEven,evenNode)
  oddNode.next = refEven.next
  evenNode.next = null
  return refOdd.next
};

// ALT ANSWER

/*

function oddEvenList(head: ListNode | null): ListNode | null {
    let refs = [new ListNode(), new ListNode()];
    const [evenHead, oddHead] = refs;
    
    for (let i = 1, curr = head; curr != null; i++, curr = curr.next) {
        refs[i % 2].next = curr;
        refs[i % 2] = curr;
    }
    
    refs[1].next = evenHead.next;
    refs[0].next = null;
    return oddHead.next;
}

*/
