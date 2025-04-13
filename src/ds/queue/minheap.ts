interface PriorityQueueI<T> {
  dequeue(item: T): void;
  enequeue(item: T): void;
  peek(): T | null;
  front(): T | null;
  size(): number;
}
class MinProrityQueue<T> implements PriorityQueueI<T> {
  private minHeap: Array<T>;
  constructor (){
    this.minHeap = []
  }
  dequeue(item: T): void {
    this.minHeap.shift()
  }
  enequeue(item: T): void {
    throw new Error("Method not implemented.");
  }
  peek(): T {
    if(this.minHeap.length === 0) null
    return this.minHeap[this.minHeap.length]
  }
  front(): T {
    if(this.minHeap.length === 0) null
    return this.minHeap[0]
  }
  size():number {
    return this.minHeap.length
  }

  private maxHeapify() {
    if (this.minHeap.length > 1) {
        
    }
  }
}
