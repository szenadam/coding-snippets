#include <iostream>
#include <stdio.h>
#include <vector>

void insertionSort(std::vector<int>& a);
void printVector(std::vector<int> const &input);

int main() {
    std::vector<int> a {1,4,2,7,1,45,1,7,2,2};
    insertionSort(a);
    printVector(a);
    return 0;
}

void insertionSort(std::vector<int>& a) {
    for (int i=0; i < a.size(); i++) {
        while (i > 0 && a[i-1] > a[i]) {
            int tmp = a[i];
            a[i] = a[i-1];
            a[i-1] = tmp;
            i--;
        }
    }
}

void printVector(std::vector<int> const &input)
{
	for (int i = 0; i < input.size(); i++) {
		std::cout << input.at(i) << ' ';
	}
}
