(() => {
  type TreeNode = {
    value: string
  }

  type LeafNode = TreeNode & {
    isLeaf: true
  }

  type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
  }

  let a: TreeNode = { value: 'a' }
  let b: LeafNode = { value: 'b', isLeaf: true }
  let c: InnerNode = { value: 'c', children: [b] }

  function mapNode<T extends TreeNode>(
    node: T,
    f: (value: string) => string
  ): T {
    return {
      ...node,
      value: f(node.value)
    }
  }

  let a1 = mapNode(a, _ => _.toUpperCase()) // TreeNode
  let b1 = mapNode(b, _ => _.toUpperCase()) // LeafNode
  let c1 = mapNode(c, _ => _.toUpperCase()) // InnerNode
})();

(() => {
  function call(
    f: (...args: any[]) => any,
    ...args: any[]
  ): any {
    return f(...args)
  }

  function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value)
  }

  call(fill, 10, 'a') // evaluates to an array of 10 'a's
});

(() => {
  function call<T extends unknown[], R>(
    f: (...args: T) => R,
    ...args: T
  ): R {
    return f(...args)
  }

  function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value)
  }

  call(fill, 10, 'a') // evaluates to an array of 10 'a's
});
