import java.util.Arrays;
import java.util.Scanner;

public class Solution {
    public int[] singleNumber(int[] nums) {
        int xorSum = 0;
        for (int num : nums) {
            xorSum ^= num;
        }
        int lowBit = xorSum & -xorSum;
        int[] result = new int[2];
        for (int num : nums) {
            if ((num & lowBit) == 0) {
                result[0] ^= num;
            } else {
                result[1] ^= num;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite os números separados por espaço.");
        System.out.println("Lembre-se: dois números devem ser únicos e os outros devem aparecer em pares.");
        System.out.print("Entrada: ");
        if (sc.hasNextLine()) {
            String input = sc.nextLine();
            String[] parts = input.trim().split("\\s+");
            int[] nums = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                try {
                    nums[i] = Integer.parseInt(parts[i]);
                } catch (NumberFormatException e) {}
            }
            int[] resultado = s.singleNumber(nums);
            System.out.println("Os dois números que aparecem apenas uma vez são: " + Arrays.toString(resultado));
        }
        sc.close();
    }
}
