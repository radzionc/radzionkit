export interface TreeNode<T> {
  value: T
  children: TreeNode<T>[]
}
export declare function getTreeNode<T>(
  tree: TreeNode<T>,
  path: number[],
): TreeNode<T>
export declare function getTreeValues<T>(tree: TreeNode<T>): T[]
export declare function getTreeLeafs<T>(tree: TreeNode<T>): T[]
