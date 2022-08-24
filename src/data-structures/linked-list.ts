class Node<T> {
  next: Node<T> | null;
  constructor(public value: T) {
    this.next = null;
  }
}

export class LinkedList<T> {
  head: Node<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value: T) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value: T) {
    const node = new Node(value);

    // check if list is empty
    if (!this.head) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let temp = this.head;
      let result = "";
      while (temp) {
        result += temp.value + " ";
        temp = temp.next;
      }
      console.log(result);
    }
  }

  insert(value: T, index: number) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head as Node<T>;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next as Node<T>;
      }
      node.next = prev.next;
      prev.next = node;
    }
  }

  remove(index: number) {
    if (index < 0 || index > this.size) {
      return;
    }

    const head = this.head as Node<T>;
    let rmNode: Node<T>;

    if (index === 0) {
      rmNode = head;
      this.head = head.next;
    } else {
      let prev = head;
      for (let i = 0; i < index - 1; i++) {
        prev = head.next as Node<T>;
      }
      rmNode = prev.next as Node<T>;
      prev.next = rmNode.next;
    }

    this.size++;
    return rmNode.value;
  }

  removeValue(value: T) {
    // check if list is empty
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const rmValue = prev.next;
        prev.next = rmValue.next;
        this.size--;
        return value;
      }
    }
    return null;
  }

  search(value: T) {
    if (this.isEmpty()) {
      return -1;
    } else {
      let i = 0;
      let curr = this.head;
      while (curr) {
        if (curr.value === value) {
          return i;
        }
        curr = curr.next;
        i++;
      }
      return -1;
    }
  }

  reverse() {
    let prev: Node<T> | null = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

const list = new LinkedList<number>();
console.log("Is list empty?", list.isEmpty());
list.print();
console.log("List size", list.getSize());

list.append(10);
list.append(20);
list.append(30);
list.insert(15, 1);
list.print();

console.log(list.search(20));

list.reverse();
list.print();
