// 0543 - Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/description/

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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0

  traverse(root)
  function traverse(curr: TreeNode | null): number {
    if (!curr) return -1

    const left = traverse(curr.left)
    const right = traverse(curr.right)

    diameter = Math.max(2 + left + right, diameter)
    return 1 + Math.max(left, right)
  }

  return diameter
}
