// https://leetcode.com/problems/linked-list-components/description/
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function numComponents(head, nums) {
    var set = new Set(nums);
    var count = 0;
    var connected = false;
    var current = head;
    while (current !== null) {
        if (set.has(current.val)) {
            if (!connected) {
                count++;
                connected = true;
            }
        }
        else {
            connected = false;
        }
        current = current.next;
    }
    return count;
}
var node3 = new ListNode(3);
var node2 = new ListNode(2, node3);
var node1 = new ListNode(1, node2);
var head = new ListNode(0, node1);
var nums = [0, 1, 3];
var result = numComponents(head, nums);
console.log("N\u00FAmero de componentes conectados: ".concat(result));
