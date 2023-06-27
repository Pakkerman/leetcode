// 110 - Balanced Binary Tree
// https://leetcode.com/problems/balanced-binary-tree/

function isBalanced(root: TreeNode | null): boolean {
  return dfs(root)[0]

  function dfs(curr: TreeNode | null): [boolean, number] {
    if (!curr) return [true, 0]

    const left = dfs(curr.left)
    const right = dfs(curr.right)

    // If left and right is balanced from the previous recrusion
    // and the height difference of left and right is less than 1
    const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1
    return [balanced, 1 + Math.max(left[1], right[1])]
  }
}
