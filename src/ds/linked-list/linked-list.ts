export class Node<T> {
  public next: Node<T> | null = null;
  public data: T;
  constructor(data: T) {
    this.data = data;
  }
}
export interface ILinkedList<T> {
  insertInBegin(data: T): void;
  insertAtEnd(data: T): void;
  deleteAtEnd(): void;
  traverse(): void;
  // size(): number;
  // search(comparator: (data: T) => boolean): Node<T> | null;
}

class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null = null;

  insertInBegin(data: T) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  insertAtEnd(data: T): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = node;
  }

  traverse() {
    if (!this.head) {
      console.warn("empty linked list");
      return;
    }

    let current = this.head;
    while (current.next) {
      console.log(current.data);
      current = current.next;
    }
    console.log(current.data);
  }
  deleteAtEnd(): void {
    if (!this.head) {
      console.error("Sorry! , There is no element inside the linkedList");
      return;
    }
   
		if(!this.head.next){
			this.head = null
			return
		}
    let current = this.head;
    while (current.next) {
      if (!current.next.next) {
				console.log(`\nElement ${current.next.data} has been deleted\n`);
        break;
      }
      current = current.next;
    }

		
    current.next = null;
  }
}

let list = new LinkedList<number>();
list.insertInBegin(3);
list.insertInBegin(2);
list.insertAtEnd(4);
list.insertInBegin(1);
list.insertAtEnd(5);
list.insertAtEnd(7);
list.traverse()
list.deleteAtEnd();
list.traverse()
