// 0235 - Lowest Common Ancestor of a Binary Search Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!p?.val || !q?.val) return null
  let curr: TreeNode | null = root

  while (curr) {
    if (p.val <= curr.val && curr.val <= q.val) return curr

    if (curr.val < p.val) curr = curr.right
    else if (curr.val > q.val) curr = curr.left
  }
}
