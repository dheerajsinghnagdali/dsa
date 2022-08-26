import { LinkedList } from "./linked-list";

export class LinkedListQueue<T> {
  list: LinkedList<T>;
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value: T) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromEnd();
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

const queue = new LinkedListQueue<number>();
queue.print();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
