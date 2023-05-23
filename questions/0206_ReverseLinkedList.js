// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/description/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a = new Node('1')
const b = new Node('2')
const c = new Node('3')
const d = new Node('4')
const e = new Node('5')

a.next = b
b.next = c
c.next = d
d.next = e

var reverseList = function (head) {
  let prev = null
  let current = head
  let next

  while (current != null) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}

// Recursive
// var reverseList = function(head, prev = null) {
//     if (head === null) return prev
//     const next = head.next
//     head.next = prev
//     return reverseList(next, head)
// };

function print(list) {
  let current = list
  let output = []
  while (current) {
    output.push(current.val)
    current = current.next
  }
  return output.join(' => ')
}

console.log(print(reverseList(a)))
