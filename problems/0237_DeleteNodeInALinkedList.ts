// 0237 - Delete Node in a Linked List
// https://leetcode.com/problems/delete-node-in-a-linked-list/description/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function deleteNode(node: ListNode): void {
  node.val = node.next.val
  node.next = node.next.next
}
