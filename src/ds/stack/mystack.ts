interface StackI<T> {
  push(item: T): void;
  printStack(): void;
  peek(): T | null;
  isEmpty(): boolean;
}

class Stack<T> implements StackI<T> {
  private stack: T[] = [];
  push(...items: T[]) {
    this.stack = [...this.stack, ...items];
  }
  printStack() {
    console.log(this.stack);
  }
  peek() {
    if (this.stack.length) return this.stack[this.stack.length - 1];
    return null;
  }
  isEmpty(): boolean {
    return !this.stack.length;
  }
}

const myStack = new Stack<number>();
myStack.push(2, 3, 4, 7);
myStack.printStack();
console.log("Peek Element ->", myStack.peek());
console.log("IsEmpty->", myStack.isEmpty());
