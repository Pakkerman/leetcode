// 0230 - Kth Smallest Element in a BST
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preOrderTraverse(curr: TreeNode | null, path: number[]): number[] {
  if (!curr) return path

  if (curr.val !== null) path.push(curr.val)
  preOrderTraverse(curr.left, path)
  preOrderTraverse(curr.right, path)

  return path
}

function kthSmallest(root: TreeNode | null, k: number): number {
  return preOrderTraverse(root, []).sort((a, b) => a - b)[k - 1]
}
