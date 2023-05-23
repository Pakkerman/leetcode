// 0101 - Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/description/

// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.left = left === undefined ? null : left
//     this.right = right === undefined ? null : right
//   }
// }

function compare(n1: TreeNode | null, n2: TreeNode | null): boolean {
  if (n1 === null && n2 === null) return true
  if (n1 === null || n2 === null) return false

  // return if all of the conditions are true,
  // If any of it or any of the recurse function returns false, all will collapse to false
  return (
    n1.val === n2.val &&
    compare(n1.left, n2.right) &&
    compare(n1.right, n2.left)
  )
}

function isSymmetric(root: TreeNode | null): boolean {
  return compare(root, root)
}
