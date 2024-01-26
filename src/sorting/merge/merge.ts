/**
 * @param {number[]} arr
 * @param {number} p : Most Left Index
 * @param {number} r : Most Right Index
 * @return {*}  {number[]}
 */
function mergeSort(arr: number[], p: number, r: number): number[] {
  let q: number = Number.MAX_SAFE_INTEGER;
  if (p < r && q > 0) {
    q = Math.floor((p + r) / 2);
    mergeSort(arr, p, q);
    mergeSort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
  return arr;
}

function merge(arr: number[], p: number, q: number, r: number) {
  // Divide and conquer
  const leftArray = arr.slice(p, q + 1);
  const rightArray = arr.slice(q + 1, r + 1);
  leftArray.push(Number.MAX_SAFE_INTEGER);
  rightArray.push(Number.MAX_SAFE_INTEGER);
  let i = 0; // index for leftArray
  let j = 0; // indexe for rightArray

  for (
    let k = p;
    (leftArray[i] !== Number.MAX_SAFE_INTEGER ||
      rightArray[j] != Number.MAX_SAFE_INTEGER) &&
    k <= r;
    k++
  ) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      j++;
    }
  }
}

console.log(mergeSort([3, 0, 1, 4, 6, 1, 2], 0, 6));
