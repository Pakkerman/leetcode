// 0019 - Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(0, head)
    let curr = head
    let lag = dummy.next

    for (let i = 0; i < n && curr; i++) {
        curr = curr.next
    }

    while (curr && lag) {
        lag = lag.next
        curr = curr.next
    }

    if (lag) lag.next = lag.next?.next ?? null

    return head
}
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     if (!head?.next) return null
//     let curr: ListNode | null = head
//     let lag: ListNode | null = head

//     // 1. Offset curr by n
//     for (let i = 0; i < n && curr; i++) {
//         curr = curr.next
//     }

//     if (!curr) return head?.next ?? null

//     // 2. Traverse to the end
//     while (curr?.next) {
//         curr = curr.next
//         lag = lag?.next ?? null
//     }

//     if (lag && lag.next) lag.next = lag.next.next

//     return head
// }
