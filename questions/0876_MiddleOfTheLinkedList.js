// https://leetcode.com/problems/middle-of-the-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // run 2 instence of head, one pointer is running twice as the speed
  // of the other one
  let fast = head // will increament 2 pointer every iteration
  let slow = head // will increament 1 pointer every iteration

  // when fast has reach the end, the slow will be at the middle point
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}
