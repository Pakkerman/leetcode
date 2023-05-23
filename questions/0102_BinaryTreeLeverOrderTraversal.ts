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

function traverse(
  node: TreeNode | null,
  path: number[][],
  counter: number = 0
): number[][] {
  if (!node) return path
  // Init empty array in path[] to match counter
  while (path.length != counter + 1) path.push([])

  path[counter].push(node.val)
  counter++
  traverse(node.left, path, counter)
  traverse(node.right, path, counter)

  return path
}

function levelOrder(root: TreeNode | null): number[][] {
  return traverse(root, [])
}
