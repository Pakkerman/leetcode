// this is not the full code of ListNode Object
// Testing and solution needs to be run on the LeetCode site
// https://leetcode.com/problems/palindrome-linked-list/description/
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val
//   this.next = next === undefined ? null : next
// }

function isPalindrome(head) {
  let currentValue = head.val
  const listA = []
  const listB = []
  while (currentValue != null) {
    listA.push(currentValue)
    listB.unshift(currentValue)
    if (head.next == null) break
    head = head.next
    currentValue = head.val
  }
  return listA.every((item, index) => item === listB[index])
}
