function quicksort(arr: number[], p: number, r: number) {
  if (p < r) {
    const q = partion(arr, p, r);
    quicksort(arr, p, q - 1);
    quicksort(arr, q + 1, r);
  }
  return arr;
}

function partion(arr: number[], p: number, r: number) {
  const pivot = arr[r];
  let i = p - 1;

  for (let j = p; j < r; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; //swap
    }
  }
  [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]]; // swap

  return i + 1;
}

console.log(quicksort([2, 4, 5, 6, 7, 1], 0, 5));
