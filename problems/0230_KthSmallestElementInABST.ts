// 0230 - Kth Smallest Element in a BST
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

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

function kthSmallest(root: TreeNode | null, k: number): number {
  const path: number[] = []
  dfs(root, k, path)
  return path[k - 1]
}

function dfs(curr: TreeNode | null, k: number, path: number[]): void {
  if (!curr) return
  dfs(curr.left, k, path)
  path.push(curr.val)
  if (path.length === k) return
  dfs(curr.right, k, path)
}
