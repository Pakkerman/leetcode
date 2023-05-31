// 0206 - Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/

type ListNode = {
    next: ListNode | null
}

// function reverseList(head: ListNode | null): ListNode | null {
//     if (!head) return null

//     let newHead: ListNode | null = head
//     if (head.next) {
//         newHead = reverseList(head.next)
//         head.next.next = head
//     }
//     head.next = null
//     return newHead

// function reverseList(head: ListNode | null): ListNode | null {
//     if (!head) return null
//     let curr: ListNode | null = head
//     let prev: ListNode | null = null

//     while (curr !== null) {
//         const next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//     }

//     return prev
// }
