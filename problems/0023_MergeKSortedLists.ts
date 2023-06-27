// 0023 - Merge K Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/description/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) return null

    while (lists.length > 1) {
        const res: (ListNode | null)[] = []

        for (let i = 0; i < lists.length; i += 2) {
            const list1 = lists[i]
            const list2 = lists[i + 1] == null ? null : lists[i + 1]
            res.push(mergeList(list1, list2))
        }
        lists = res
    }

    return lists[0]
}

function mergeList(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    const dummy: ListNode | null = new ListNode()
    let curr = dummy

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = list1
            list1 = list1.next
            curr = curr.next
        } else if (list1.val > list2.val) {
            curr.next = list2
            list2 = list2.next
            curr = curr.next
        }
    }

    curr.next = list1 || list2

    return dummy.next
}
