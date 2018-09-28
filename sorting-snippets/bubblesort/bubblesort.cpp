#include <iostream>
#include <stdio.h>
#include <vector>

void bubblesort(std::vector<int>& a);
void printVector(std::vector<int> const &input);

int main() {
    std::vector<int> a {1,4,2,7,1,45,1,7,2,2};
    bubblesort(a);
    printVector(a);
    return 0;
}

void bubblesort(std::vector<int>& a) {
    for(unsigned int i = 0; i < a.size(); i++)
    {
        bool swapped = false;
        for(unsigned int j = 0; j < a.size() - i -1; j++)
        {
            if (a[j] > a[j+1]) {
                swapped = true;
                int tmp = a[j];
                a[j] = a[j+1];
                a[j+1] = tmp;
            }
        }
        if (!swapped) break;
    }
}

void printVector(std::vector<int> const &input)
{
	for (int i = 0; i < input.size(); i++) {
		std::cout << input.at(i) << ' ';
	}
}
