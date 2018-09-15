const array1 = [1,3,6,21,5,23,12,6,2];
const array2 = [2,2,3,4,1,1];
const array3 = [0];
const array4 = [1];
const array5 = [];
const array6 = ['foo', 'foobar', 'foobarbaz'];

function bubblesort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swapped = true;
        const tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
      }
    }
    if (!swapped) break;
  }
}

console.log(array1);
bubblesort(array1);
console.log(array2);
bubblesort(array2);
console.log(array3);
bubblesort(array3);
console.log(array4);
bubblesort(array4);
console.log(array5);
bubblesort(array5);
console.log(array6);
bubblesort(array6);
