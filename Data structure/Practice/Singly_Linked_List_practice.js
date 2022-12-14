class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let cur = this.head;
    let pre = cur;
    while (cur.next) {
      pre = cur;
      cur = cur.next;
    }
    this.tail = pre;
    pre.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return cur;
  }

  shift() {
    if (!this.head) return undefined;
    let shifted = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return shifted;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, value) {
    const updatedNode = this.get(index);
    if (updatedNode) {
      updatedNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const cur = prev.next;
    prev.next = newNode;
    newNode.next = cur;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prev = this.get(index - 1);
    const cur = this.get(index);

    prev.next = cur.next;
    this.length--;

    return cur.value;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

// test
const list = new SinglyLinkedList();
list.push("zero");
list.push("one");
list.push("two");
console.log(list);
list.reverse();
console.log(list);
