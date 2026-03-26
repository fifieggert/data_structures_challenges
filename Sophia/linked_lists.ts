// https://leetcode.com/problems/linked-list-components/description/

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function numComponents(head: ListNode | null, nums: number[]): number {
    const set = new Set(nums);
    let count = 0;
    let connected = false;
    let current = head;

    while (current !== null) {
        if (set.has(current.val)) {
            if (!connected) {
                count++;
                connected = true;
            }
        } else {
            connected = false;
        }
        current = current.next;
    }

    return count;
}

const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
const head = new ListNode(0, node1);

const nums = [0, 1, 3];

const result = numComponents(head, nums);
console.log(`Número de componentes conectados: ${result}`);