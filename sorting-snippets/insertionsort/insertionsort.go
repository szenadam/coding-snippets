package main

import (
	"fmt"
)

func insertionSort(array []int) []int {
	for i:= 0; i < len(array); i++ {
		for i > 0 && array[i-1] > array[i] {
			array[i], array[i-1] = array[i-1], array[i]
			i--
		}
	}
	return array
}

func main() {
	a := []int{1,4,8,21,6,1,12,5}
	fmt.Println(insertionSort(a))
}
