// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    const head = new ListNode()
    let tail = head

    while (list1 && list2) {
        if (list1 > list2) {
            tail.next = list2
            list2 = list2.next
        } else {
            tail.next = list1
            list1 = list1.next
        }
        tail = tail.next
    }

    if (list1) tail.next = list1
    if (list2) tail.next = list2

    return head.next
}
