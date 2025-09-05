import { LinkedList } from "./linked-list.ts";

export class LinkedListStack<T> {
  list: LinkedList<T>;
  constructor() {
    this.list = new LinkedList();
  }

  push(value: T) {
    this.list.prepend(value);
  }

  pop() {
    this.list.removeFromFront();
  }

  peek() {
    return this.list.head?.value;
  }

  getSize() {
    return this.list.getSize();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  print() {
    this.list.print();
  }
}
