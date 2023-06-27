// 0104 - Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

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

function traverse(curr: TreeNode | null, depth: number): number {
  if (!curr) return depth + 1

  return Math.max(traverse(curr.left, depth), traverse(curr.right, depth))
}

function maxDepth(root: TreeNode | null): number {
  let depth = -1
  return traverse(root, depth)
}
