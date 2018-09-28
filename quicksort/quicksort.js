const array = [1,4,2,6,2,7,21,0,5,2,4,1];

function quickSort(array) {
  const length = array.length;

  if (length <= 1) {
    return array;
  }

  const pivot = array[0];
  let greater = [];
  let lesser = [];

  for (let i = 1; i < length; i++) {
    if (array[i] > pivot) {
      greater.push(array[i]);
    } else {
      lesser.push(array[i]);
    }
  }

  let sorted = quickSort(lesser);
  sorted.push(pivot);
  sorted = sorted.concat(quickSort(greater));

  return sorted;
}

console.log(quickSort(array));
