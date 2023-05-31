// 0142 - Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii/description/

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
    let slow = head
    let fast = head

    while (fast && fast.next) {
        if (slow) slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            slow = head
            while (slow != fast) {
                slow = slow.next
                fast = fast.next
            }
            return slow
        }
    }
    return null
}
