import java.util.Arrays;

public class InsertionSort {

    public static void main(String[] args) {
        int[] array = {1,3,1,6,1,6,1,51};
        insertionSort(array);
        System.out.println(Arrays.toString(array));
    }

    public static void insertionSort(int[] array) {
        for (int i = 0; i < array.length; i++) {
            while (i > 0 && array[i-1] > array[i]) {
                int tmp = array[i];
                array[i] = array[i-1];
                array[i-1] = tmp;
                i--;
            }
        }
    }
}
