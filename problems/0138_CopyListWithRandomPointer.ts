// 0138 - Copy List with Random Pointer
// https://leetcode.com/problems/copy-list-with-random-pointer/

class ListNode {
    val: number
    next: ListNode | null
    random: ListNode | null
    constructor(val?: number, next?: ListNode, random?: ListNode) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
        this.random = random === undefined ? null : random
    }
}

function copyRandomList(head: ListNode | null): ListNode | null {
    const hash = new Map<ListNode, ListNode>()
    const newHead = new ListNode()
    let curr = head
    let newCurr = newHead
    while (curr) {
        const newNode = new ListNode(curr.val)
        newCurr.next = newNode
        hash.set(curr, newNode)

        newCurr = newCurr.next
        curr = curr.next
    }

    curr = head
    while (curr) {
        if (curr.random !== null) {
            const newRandom = hash.get(curr.random)
            const newNode = hash.get(curr)!
            newNode.random = newRandom ?? null
        }
        curr = curr.next
    }
    return newHead
}

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(3)

a.next = b
a.random = null
b.next = c
b.random = a
c.next = null
c.random = b

console.log(copyRandomList(a))
