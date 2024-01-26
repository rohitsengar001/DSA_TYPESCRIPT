function bubbleSort(arr: Array<number>) {
  for (let i = 1; i <= arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap the elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
}

console.log(bubbleSort([2, 4, 5, 6, 1]));
