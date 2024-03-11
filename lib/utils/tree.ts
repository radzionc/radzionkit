export interface TreeNode<T> {
  value: T
  children: TreeNode<T>[]
}

export function getTreeNode<T>(tree: TreeNode<T>, path: number[]): TreeNode<T> {
  return path.reduce((node, i) => node.children[i], tree)
}

export function getTreeValues<T>(tree: TreeNode<T>): T[] {
  return [tree.value, ...tree.children.flatMap(getTreeValues)]
}

export function getTreeLeafs<T>(tree: TreeNode<T>): T[] {
  if (tree.children.length === 0) {
    return [tree.value]
  }
  return tree.children.flatMap(getTreeLeafs)
}
