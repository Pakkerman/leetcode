// 0103 - Binary Tree Zigzag Level Order Traversal
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

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

function traverse(
  node: TreeNode,
  path: number[][],
  counter: number = 0
): number[][] {
  if (!node) return path

  while (path.length < counter + 1) path.push([])
  if (counter % 2 === 0) {
    path[counter].push(node.val)
  } else {
    path[counter].unshift(node.val)
  }
  counter++
  traverse(node.left, path, counter)
  traverse(node.right, path, counter)

  return path
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  return traverse(root, [])
}
