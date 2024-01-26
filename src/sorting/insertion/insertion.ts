function insertionSort(arr: Array<number>) {
  for (let j = 2; j < arr.length; j++) {
    const key = arr[j];
    let i = j - 1;
     while( i > -1 && arr[i] > key ){
      arr[i + 1] = arr[i]
      i--
     }
     arr[i + 1]= key
  }
}

const arr= [4,5,1,0,6,2]
insertionSort(arr)
console.log(arr); // output: [ 0, 1, 2, 4, 5, 6 ]