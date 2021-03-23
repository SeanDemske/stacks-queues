/** Node: node for a stack. */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    }

    if (this.size > 0) {
      const secondNode = this.first;
      this.first = node;
      this.first.next = secondNode;
    }

    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw new Error;

    const topOfStack = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }

    if (this.size > 1) {
      this.head = topOfStack.next;
    }

    this.size--;
    return topOfStack.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val || null;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return (this.size === 0) ? true : false;
  }
}

module.exports = Stack;
