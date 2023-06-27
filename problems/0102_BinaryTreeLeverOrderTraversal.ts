// 0102 - Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

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

function levelOrder(root: TreeNode | null): number[][] {
  const out: number[][] = []
  traverse(root, 0)

  function traverse(curr: TreeNode | null, level: number): boolean {
    if (!curr) return false

    if (out[level]) out[level].push(curr.val)
    else out[level] = [curr.val]

    traverse(curr.left, level + 1)
    traverse(curr.right, level + 1)

    return false
  }
  return out
}
