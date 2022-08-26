class Node<T> {
  left: Node<T> | null;
  right: Node<T> | null;
  constructor(public value: T) {
    this.right = null;
    this.left = null;
  }
}

class BST<T> {
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
}

const bst = new BST<number>();
bst.insert(1);
bst.insert(0);
bst.insert(2);
bst.insert(-1);

/* 
         1
       /  \
     0     2
    /
  -1
*/

console.log(bst.search(bst.root, -1));

bst.preOrder(bst.root);
bst.inOrder(bst.root);
bst.postOrder(bst.root);

export {};
