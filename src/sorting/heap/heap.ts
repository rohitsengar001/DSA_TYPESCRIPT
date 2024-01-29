function heapSort(arr: Array<number>) {
  buildMaxHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    //Exchange Root(Maximum Number) Last Element(lowest Number) Inside Heap
    [arr[i], arr[0]] = [arr[0], arr[i]];

    //heapify the heap again
    //due to lowest elmenent comes at root element
    maxHeapify(arr, i, 0);
  }
  return arr;
}

function buildMaxHeap(arr: Array<number>) {
  for (let i = Math.floor(arr.length / 2); i > -1; i--) {
    maxHeapify(arr, arr.length, 0);
  }
}

function maxHeapify(arr: Array<number>, heapSize: number, rootIndex: number) {
  let largest = rootIndex;
  const left = 2 * rootIndex + 1;
  const right = 2 * rootIndex + 2;

  //compare the left and right for largest alongwith rootIndex
  if (left < heapSize && arr[left] > arr[largest]) largest = left;
  if (right < heapSize && arr[right] > arr[largest]) largest = right;

  if (largest !== rootIndex) {
    // swap root with largest element
    [arr[largest], arr[rootIndex]] = [arr[rootIndex], arr[largest]];

    //recurisevely Heapify the sub-tree
    maxHeapify(arr, heapSize, largest);
  }
}

console.log(heapSort([1,4, 10, 3,-2, 5, 1]));
