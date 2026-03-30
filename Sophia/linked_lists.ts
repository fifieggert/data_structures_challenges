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

