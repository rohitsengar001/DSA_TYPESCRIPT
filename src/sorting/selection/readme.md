# Selection Sort
![selectionSortImg](https://miro.medium.com/v2/resize:fit:1102/1*H2bCd6eoIONJIUnG5Jm9sQ.gif)

## Algorithm 
```ts
SELECTION-SORT(A)
1. for i = 1 to length[A] - 1
2.     minIndex = i
3.     for j = i + 1 to length[A]
4.         if A[j] < A[minIndex]
5.             minIndex = j
6.     // Swap A[i] and A[minIndex]
7.     exchange A[i] with A[minIndex]

```

```base
Complexity : O(n^2) In all cases(Best, Average & Worst)
```