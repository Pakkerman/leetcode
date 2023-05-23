// 0019 - Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // Traverase through the list and get the length
  // Get the the node before the Nth node from the end
  // Node.next = node.next.next
  // Return head
  let curr = head
  let lag = head

  for (let i = 0; i < n; i++) {
    curr = curr.next
  }

  if (!curr) return head.next

  while (curr.next) {
    curr = curr.next
    lag = lag.next
  }
  lag.next = lag.next.next

  return head
}
