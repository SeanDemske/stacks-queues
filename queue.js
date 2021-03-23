/** Node: node for a queue. */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const node = new Node(val)
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else if (this.size > 0) {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) throw new Error;

    const dequeuedNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }

    if (this.size > 1) {
      this.head = dequeuedNode.next;
    }

    this.size--;
    return dequeuedNode.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val || null;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return (this.size === 0) ? true : false;
  }
}

module.exports = Queue;
