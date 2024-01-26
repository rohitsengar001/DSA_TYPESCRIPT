function insertionSort(arr: Array<number>) : Array<number>{
  for (let j = 1; j < arr.length; j++) {
    const key = arr[j];
    let i = j - 1;
     while( i > -1 && arr[i] > key ){
      arr[i + 1] = arr[i]
      i--
     }
     arr[i + 1]= key
  }
  return arr
}


console.log(insertionSort([4,5,1,0,6,2])); // output: [ 0, 1, 2, 4, 5, 6 ]