// 0025 - Reverse Nodes in k-Group
// https://leetcode.com/problems/reverse-nodes-in-k-group/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

//  Understand:
//      1. Reverse K nodes at a time, and move on
//      2. If remainder is less than K, return

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    // Offset 2 pointers that has K numbers of nodes between them
    // If the second pointer is not null, reverse this portion
    // Traverse these 2 pointer by K once more and repeat

    const dummy: ListNode | null = new ListNode(0, head)
    let groupPrev = dummy
    while (true) {
        let kth = getNode(groupPrev, k)
        if (!kth) break

        let curr = groupPrev.next
        let groupNext = kth.next
        let prev = kth.next
        while (curr && curr !== groupNext) {
            const tmp = curr.next
            curr.next = prev
            prev = curr
            curr = tmp
        }
        const tmp = groupPrev.next!
        groupPrev.next = kth
        groupPrev = tmp
    }

    return dummy.next
}

function getNode(curr: ListNode | null, k: number) {
    for (let i = 0; i < k && curr; i++) {
        curr = curr.next
    }
    return curr
}
