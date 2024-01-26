function selectionSort(arr: number[]) {
  //upper loop depict the number of counts
  // n elments would have n-1 comparison
  for (let i = 0; i < arr.length - 1; i++) {
    //take first index as minimum element's index
    let minIndex = i;

    //inner loop executes from the next of 'i' index
    for (let j = i + 1; j < arr.length; j++) {
      //find and update the minIndex
      if (arr[minIndex] > arr[j]) minIndex = j;
    }

    //swapes the  previous min element to new one
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort([7, 3, 2, 4, 1]));
