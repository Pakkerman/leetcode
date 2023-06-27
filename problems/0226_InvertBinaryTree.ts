// 0226 - Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/description/

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

function invertTree(root: TreeNode | null): TreeNode | null {
  invert(root)
  return root
}

function invert(curr: TreeNode | null) {
  if (!curr) return

  if (curr.left) invert(curr.left)
  if (curr.right) invert(curr.right)

  const tmp = curr.left
  curr.left = curr.right
  curr.right = tmp
}
