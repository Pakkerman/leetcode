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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let resultNode = new ListNode()
  let current = resultNode
  let tenth = 0

  // Handle the basic adding of 2 Lists and create a new one
  while (l1 != null && l2 != null) {
    const sum = l1.val + l2.val + tenth
    current.val = sum % 10
    tenth = sum > 9 ? 1 : 0

    l1 = l1.next
    l2 = l2.next

    if (l1 != null && l2 != null) {
      current.next = new ListNode()
      current = current.next
    }
  }

  // Define the tail before link the rest of the list, if there's any left on l1 or l2
  let tail = current

  // Link current pointer with ther rest of the List
  if (l1 != null) current.next = l1
  if (l2 != null) current.next = l2

  tail = tail.next

  // If there is tenth digit, add on to tail.val
  while (tenth != 0 && tail != null) {
    const sum = tail.val + tenth
    tenth = sum > 9 ? 1 : 0
    tail.val = sum % 10
    tail = tail.next
  }

  // If there is still left in tenth digit, traverse current to the end and create a new ListNode
  // and assign tenth digit to val
  if (tenth != 0) {
    while (current.next != null) {
      current = current.next
    }
    current.next = new ListNode()
    current.next.val = tenth
  }

  return resultNode
}
