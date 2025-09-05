// FIFO
export class Queue<T> {
  items: Record<number, T>;
  rear: number;
  front: number;
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(item: T) {
    this.items[this.rear] = item;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek(): T | void {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}
