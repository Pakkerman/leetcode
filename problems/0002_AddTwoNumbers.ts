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
    const dummy = new ListNode()
    let curr = dummy
    let tenth = 0

    while (l1 || l2 || tenth) {
        const val1 = l1?.val ?? 0
        const val2 = l2?.val ?? 0
        let val = val1 + val2 + tenth
        tenth = Math.floor(val / 10)
        val = val % 10

        curr.next = new ListNode(val)
        curr = curr.next
        l1 = l1?.next ?? null
        l2 = l2?.next ?? null
    }

    return dummy.next
}
