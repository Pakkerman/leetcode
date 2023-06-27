// 0145 - Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/description/

// * Definition for a binary tree node.
// * class TreeNode {
// *     val: number
// *     left: TreeNode | null
// *     right: TreeNode | null
// *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
// *         this.val = (val===undefined ? 0 : val)
// *         this.left = (left===undefined ? null : left)
// *         this.right = (right===undefined ? null : right)
// *     }
// * }
// */

function traverse(node: TreeNode | null, path: number[]): number[] {
  if (node == null) return path

  traverse(node.left, path)
  traverse(node.right, path)
  path.push(node.val)

  return path
}

function postorderTraversal(root: TreeNode | null): number[] {
  return traverse(root, [])
}
