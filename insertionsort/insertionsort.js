let array = [1,4,8,21,6,1,12,5];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    while (i > 0 && array[i-1] > array[i]) {
      const tmp = array[i];
      array[i] = array[i-1];
      array[i-1] = tmp;
      i--;
    }
  }
}

insertionSort(array);
console.log(array);
