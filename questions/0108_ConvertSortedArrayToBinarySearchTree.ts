// 0108 - Convert Sorted Array to Binary Search Tree
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null
  const midIdx = Math.floor(nums.length / 2)

  const node = new TreeNode(nums[midIdx])
  node.left = sortedArrayToBST(nums.slice(0, midIdx))
  node.right = sortedArrayToBST(nums.slice(midIdx + 1))

  return node
}
