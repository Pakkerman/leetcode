// 1448 - Count Good Nodes in Binary Tree
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/

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

function goodNodes(root: TreeNode | null): number {
  if (!root) return 0
  let good = 0

  traverse(root, -Infinity)
  function traverse(curr: TreeNode | null, max: number): void {
    if (!curr) return

    if (curr.val >= max) good++
    traverse(curr.left, Math.max(curr.val, max))
    traverse(curr.right, Math.max(curr.val, max))
  }

  return good
}
