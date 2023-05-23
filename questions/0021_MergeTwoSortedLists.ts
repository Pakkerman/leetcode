// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

//  Definition for singly-linked list.

class ListNode {
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

interface ListNode {
  val: number
  next: ListNode | null
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 == null) return list2
  if (list2 == null) return list1

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}

function mergeTwoListsSortMethod(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const merge = [] as number[]
  let result = new ListNode()

  while (list1 != null) {
    merge.push(list1.val)
    list1 = list1.next
  }
  while (list2 != null) {
    merge.push(list2.val)
    list2 = list2.next
  }

  const sorted = merge.sort((a, b) => a - b)
  let current = result

  sorted.forEach((item, index) => {
    current.val = item
    if (index === sorted.length - 1) return
    current.next = new ListNode()
    current = current.next
  })

  return result
}
const list1 = makeListFromArray([1, 2, 4])
const list2 = makeListFromArray([1, 3, 4])

console.log(printList(mergeTwoLists(list1, list2)))

function printList(list: ListNode | null): number[] {
  let result: number[] = []

  let current: ListNode | null = list

  while (current != null) {
    result.push(current.val)
    current = current.next
  }

  return result
}

function makeListFromArray(array: number[]): ListNode {
  const len = array.length
  let listNode = new ListNode()
  let current = listNode

  array.forEach((item, index) => {
    current.val = item
    if (index === len - 1) return
    current.next = new ListNode()
    current = current.next
  })

  return listNode
}
