// 0143 - Reorder List
// https://leetcode.com/problems/reorder-list/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function reorderList(head: ListNode | null): void {
    if (!head || !head.next) return
    // 1. Find mid point
    let slow: ListNode | null = head
    let fast: ListNode | null = head.next
    while (slow && fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    if (!slow) return

    // 2. Reverse list from mid point forward
    //    - prev will be the head of l2 after reverse
    let l2: ListNode | null = slow.next
    slow.next = null

    let prev: ListNode | null = null
    while (l2) {
        const next = l2.next
        l2.next = prev
        prev = l2
        l2 = next
    }

    // 3. Link all nodes together
    let l1: ListNode | null = head // list 1 >> 2 >> 3...
    l2 = prev // list n >> n-1 >> n-2...

    let alterantor = 0 // alternating between l1 and l2
    while (l1 && l2) {
        let next: ListNode | null
        if (alterantor % 2 === 0) {
            next = l1.next
            l1.next = l2
            l1 = next
        } else if (alterantor % 2 === 1) {
            next = l2.next
            l2.next = l1
            l2 = next
        }
        alterantor++
    }
}
