export class Node<T> {
  next: Node<T> | null;
  prev: Node<T> | null;
  constructor(public value: T) {
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isNotEmpty(): this is { tail: Node<T>; head: Node<T>; size: number } {
    return this.size !== 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value: T) {
    const node = new Node(value);
    if (this.isNotEmpty()) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
  }

  append(value: T) {
    const node = new Node(value);
    if (this.isNotEmpty()) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  print() {
    let result = "";
    let node = this.head;
    while (node) {
      result += `${node.value}<->`;
      node = node.next;
    }
    console.log(result);
  }

  removeFromFront() {
    if (this.isNotEmpty()) {
      const value = this.head.value;
      this.head = this.head.next as Node<T>;
      this.head.prev = null;
      this.size--;
      return value;
    } else {
      return null;
    }
  }

  removeFromEnd() {
    if (this.isNotEmpty()) {
      const value = this.tail.value;
      this.tail = this.tail.prev as Node<T>;
      this.tail.next = null;
      this.size--;
      return value;
    } else {
      return null;
    }
  }

  printReverse() {
    if (this.isNotEmpty()) {
      let curr: Node<T> | null = this.tail;
      let result = "";
      while (curr) {
        result += `${curr.value}<->`;
        curr = curr.prev;
      }
      console.log(result);
    } else {
      console.log("List is empty");
    }
  }
}
