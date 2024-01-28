function countSort(a: Array<number>) {
  const max = Math.max(...a);
  const countBucket: number[] = new Array(max + 1).fill(0);
  const result: number[] = [];

  // count frequency
  for (const item of a) {
    countBucket[item]++;
  }

  //Modify counting bucket with add thier previous postion anchor
  for (let i = 1; i < countBucket.length; i++) {
    countBucket[i] += countBucket[i - 1];
  }

  //extract postion from countBucket & push Element at that index
  for (const item of a) {
    result[--countBucket[item]] = item;
  }
  return result;
}

console.log(countSort([1, 3, 2, 3, 4, 1, 6, 4, 3]));
