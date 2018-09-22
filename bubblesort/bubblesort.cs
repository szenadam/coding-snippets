using System;

namespace BubbleSort
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] array = {2,2,5,2,6,1,1,6,78,4,8,3,2};
            Bubblesort(array);
            Console.WriteLine(string.Join(",", array));
        }

        static void Bubblesort(int[] array)
        {
            for (int i = 0; i < array.Length; i++)
            {
                bool swapped = false;
                for (int j = 0; j < array.Length-i-1; j++)
                {
                    if (array[j] > array[j+1])
                    {
                        swapped = true;
                        int tmp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = tmp;
                    }
                }

                if (!swapped) break;
            }
        }
    }
}
