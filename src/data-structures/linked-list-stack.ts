import { LinkedList } from "./linked-list";

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

const stack = new LinkedListStack<number>();
stack.print();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.list.getSize());

stack.print();
stack.pop();
stack.print();
