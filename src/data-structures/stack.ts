// LIFO
export class Stack<T> {
  items: T[];
  constructor() {
    this.items = [];
  }

  push(item: T) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek(): T | void {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack<number>();
console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.size());
stack.print();
