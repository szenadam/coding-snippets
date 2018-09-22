import java.util.Arrays;

public class BubbleSort {

    public static void main(String[] args) {
        int[] array = {1,3,1,6,1,6,1,51};
        bubbleSort(array);
        System.out.println(Arrays.toString(array));
    }

    public static void bubbleSort(int[] array) {
        int len = array.length;
        for (int i = 0; i < len; i++) {
            Boolean swapped = false;
            for (int j = 0; j < len-i-1; j++) {
                if (array[j] > array[j+1]) {
                    swapped = true;
                    int tmp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = tmp;
                }
            }
            if (!swapped) break;
        }
    }
}