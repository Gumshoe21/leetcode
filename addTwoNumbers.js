// https://github.com/pheezx/Leetcode/blob/master/2-add-two-numbers/solution.js

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function addTwoNumbers(list1, list2) {
  let carry = 0
  let current = new ListNode()
  const solution =current 
  // the loop needs to keep running while list1 or list 2 isn't null, and since list1 and list2 could be different lengths, either one of the being null could be possible.
  while (list1 || list2 || carry) {
    let val1 = 0
    let val2 = 0
    // if list1 is not null, we'll update it to the next node.
    if (list1) {
      val1 = list1.val
      list1 = list1.next
    }

    // if list2 is not null, we'll update it to the next node as well.
    if (list2) {
      val2 = list2.val
      list2 = list2.next
    }
    const sum = val1 + val2 + carry // 3 + 7 = 10
    carry = sum > 9 ? 1 : 0 // Math.floor(sum / 10)
    const digit = sum % 10


    current.next = new ListNode(digit)
    current = currentNode
    console.log(headNode)
  }
  return headNode.next
}


// Example linked lists
// List 1: 2 -> 4 -> 3
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
// List 2: 5 -> 6 -> 4
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

// Call the addTwoNumbers function with the two linked lists
const result = addTwoNumbers(l1, l2)

// Print the resulting linked list
console.log(result) /* 
                      ListNode { 
                         val: 7, 
                         next: ListNode { 
                           val: 0, 
                           next: ListNode { 
                             val: 8, 
                             next: null 
                           } 
                         } 
                       }
*/
