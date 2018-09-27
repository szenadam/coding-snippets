using System;

namespace InsertionSort
{
    class Program
    {
        static void Main()
        {
            int[] array = {1,4,8,21,6,1,12,5};
            InsertionSort(array);
            Console.WriteLine(string.Join(",", array));
        }

        static void InsertionSort(int[] array)
        {
            for (int i = 0; i < array.Length; i++)
            {
                while (i > 0 && array[i-1] > array[i])
                {
                    int tmp = array[i];
                    array[i] = array[i - 1];
                    array[i - 1] = tmp;
                    i--;
                }
            }
        }
    }
}
