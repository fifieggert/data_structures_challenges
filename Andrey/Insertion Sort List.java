import java.util.Scanner;

public class Main { 
    public ListNode insertionSortList(ListNode head) {
        if (head == null || head.next == null) return head;

        ListNode dummy = new ListNode(0);
        ListNode curr = head;

        while (curr != null) {
            ListNode nextNode = curr.next;
            ListNode prev = dummy;
            
            while (prev.next != null && prev.next.val < curr.val) {
                prev = prev.next;
            }

            curr.next = prev.next;
            prev.next = curr;
            curr = nextNode;
        }

        return dummy.next;
    }

    public static void main(String[] args) {
        Main s = new Main();
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite os números separados por espaço (ex: 4 2 1 3):");
        
        if (sc.hasNextLine()) {
            String input = sc.nextLine();
            String[] parts = input.trim().split("\\s+");
            
           
            ListNode dummy = new ListNode(0);
            ListNode tail = dummy;
            
            for (String part : parts) {
                try {
                    int val = Integer.parseInt(part);
                    tail.next = new ListNode(val);
                    tail = tail.next;
                } catch (NumberFormatException e) {
                    
                }
            }

            ListNode head = dummy.next;
            
            if (head == null) {
                System.out.println("Nenhum número válido foi digitado.");
            } else {
                System.out.println("Antes da ordenação: " + listToString(head));
                ListNode sorted = s.insertionSortList(head);
                System.out.println("Depois da ordenação: " + listToString(sorted));
            }
        }
        sc.close();
    }

    static String listToString(ListNode head) {
        StringBuilder sb = new StringBuilder();
        ListNode cur = head;
        while (cur != null) {
            sb.append(cur.val);
            if (cur.next != null) sb.append(" -> ");
            cur = cur.next;
        }
        return sb.toString();
    }
}

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}