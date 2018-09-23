#include <stdio.h>
#include <vector>

void bubblesort(std::vector<int>& a);

int main() {
    std::vector<int> a {1,4,2,7,1,45,1,7,2,2};
    return 0;
}

void bubblesort(std::vector<int>& a) {
    for(int i = 0; i < a.size(); i++)
    {
        bool swapped = false;
        for(int j = 0; j < a.size() - i -1; j++)
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
