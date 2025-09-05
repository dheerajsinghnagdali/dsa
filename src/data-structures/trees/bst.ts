export class Node<T> {
  left: Node<T> | null;
  right: Node<T> | null;
  constructor(public value: T) {
    this.right = null;
    this.left = null;
  }
}

export class BST<T> {
  root: Node<T> | null;
  constructor() {
    this.root = null;
  }

  isNotEmpty(): this is { root: Node<T> } {
    return this.root !== null;
  }

  insert(value: T) {
    const node = new Node(value);
    if (this.isNotEmpty()) {
      this.insertNode(this.root, node);
    } else {
      this.root = node;
    }
  }

  insertNode(root: Node<T>, node: Node<T>) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root: Node<T> | null, value: T): boolean {
    if (root) {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
    return false;
  }

  preOrder(root: Node<T> | null) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root: Node<T> | null) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root: Node<T> | null) {
    if (root) {
      this.inOrder(root.left);
      this.inOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    const queue: (Node<T> | null)[] = [];
    queue.push(this.root);
    while (queue.length) {
      const curr = queue.shift();
      console.log(curr?.value);
      if (curr?.left) {
        queue.push(curr.left);
      }
      if (curr?.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root: Node<T>): T {
    if (!root.left) {
      return root.value;
    }
    return this.min(root.left);
  }

  max(root: Node<T>): T {
    if (!root.right) {
      return root.value;
    }
    return this.max(root.right);
  }

  delete(root: Node<T> | null, value: T) {
    this.root = this.deleteNode(root, value);
  }

  deleteNode(root: Node<T> | null, value: T): Node<T> | null {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }

      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }
}
