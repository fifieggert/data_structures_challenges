import java.util.Stack;
import java.util.Scanner;

public class Solution {
    public String removeDuplicateLetters(String s) {
        int[] lastOccurrence = new int[26];
        for (int i = 0; i < s.length(); i++) {
            lastOccurrence[s.charAt(i) - 'a'] = i;
        }
        boolean[] seen = new boolean[26];
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (seen[c - 'a']) continue;
            while (!stack.isEmpty() && stack.peek() > c && lastOccurrence[stack.peek() - 'a'] > i) {
                seen[stack.pop() - 'a'] = false;
            }
            stack.push(c);
            seen[c - 'a'] = true;
        }
        StringBuilder sb = new StringBuilder();
        for (Character ch : stack) {
            sb.append(ch);
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite a sequência de letras (pode repeti-las):");

        if (sc.hasNextLine()) {
            String input = sc.nextLine();
            String result = sol.removeDuplicateLetters(input.trim());
            System.out.println("Resultado (Sem letras repetidas): " + result);
        }
        sc.close();
    }
}
