// 0098 - Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/description/

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

function isValidBST(root: TreeNode | null): boolean {
  return checkValid(root, -Infinity, Infinity)

  function checkValid(
    curr: TreeNode | null,
    min: number,
    max: number
  ): boolean {
    if (!curr) return true

    // console.log(curr.val <= min || max <= curr.val, 'val:', curr.val, 'min', min,'max',max)
    if (curr.val <= min || max <= curr.val) return false
    return (
      checkValid(curr.left, min, curr.val) &&
      checkValid(curr.right, curr.val, max)
    )
  }
}
