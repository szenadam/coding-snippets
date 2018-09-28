function bubblesort(array: any[]): void {
  for (let i: number = 0; i < array.length; i++) {
    let swapped: boolean = false;
    for (let j: number = 0; j < array.length-i; j++) {
      if (array[j] > array[j+1]) {
        swapped = true;
        const tmp: any = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
      }
    }
    if (!swapped) {break;}
  }
}

const array: number[] = [1,4,2,6,2,7,2,2,4,2];
bubblesort(array);
console.log(array);