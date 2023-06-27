// 0328 - Odd Even Linked List
// https://leetcode.com/problems/odd-even-linked-list/description/

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

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return null
  // If there is less than 3 elements in the list, return head
  if (!head.next || !head.next.next) return head
  // Set curr 2 steps in front of the head
  let curr = head.next.next
  // Set even and evenHead 1 step in front of the head
  let evenHead = head.next
  let even = head.next
  // Set odd as the head
  let odd = head
  // Counter to keep track of which of the even or odd head should have the
  // next point to point to curr
  let counter = 1

  // If counter is odd, odd.next point to curr,
  // in the first iteration, this will result point to the 3rd item
  // At the second iteration, point even.next to the 4th item
  // Keep iterating until curr is null
  while (curr) {
    if (counter % 2 === 1) {
      odd.next = curr
      odd = odd.next
    } else {
      even.next = curr
      even = even.next
    }
    curr = curr.next
    counter++
  }
  // Set even.next to point to null
  even.next = null
  // Point the end of the odd to the start of even
  odd.next = evenHead

  return head
}
