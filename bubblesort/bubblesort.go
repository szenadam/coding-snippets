package main

import (
	"fmt"
)

func bubblesort(array []int) []int {
	for i := 0; i < len(array); i++ {
		swapped := false
		for j := 0; j < len(array)-i-1; j++ {
			if array[j] > array[j+1] {
				swapped = true
				array[j], array[j+1] = array[j+1], array[j]
			}
		}
		if !(swapped) {
			break
		}
	}
	return array;
}

func main() {
	a := []int{1,2,54,2,4,1,5,2,1}
	fmt.Println(bubblesort(a))
}