interface QueueI<T> {
  enqueue(item: NonNullable<T>): void;
  dequeue(): void;
  front(): T;
  rear(): T;
  size: number;
}

class Queue<T> implements QueueI<T> {
  public size: number = 0;
  private queue: T[] = [];
  enqueue(item: T): void {
    this.queue.push(item);
    this.size++;
  }
  dequeue(): void {
    if (this.size > 0) {
      this.queue.pop();
      this.size--;
    } else throw new Error("Queue is empty!");
  }
  front(): T {
    if (this.size < 1) throw new Error("Queue is empty!");
    return this.queue[0];
  }
  rear(): T {
    if (this.size < 1) throw new Error("Queue is empty!");
    return this.queue[this.size - 1];
  }
}

const queue = new Queue<number>();
queue.enqueue(1);
console.log(queue);
queue.dequeue();
console.log(queue);
queue.front()
console.log(queue);