//Lista encadeada: https://leetcode.com/problems/next-greater-node-in-linked-list/?envType=problem-list-v2&envId=linked-list

function nextLargerNodes(head: { val: number; next: { val: number; next: any } | null } | null): number[] {
  const values: number[] = [];
  let curr = head;
  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }

  const n = values.length;
  const answer: number[] = new Array(n).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && values[i] > values[stack[stack.length - 1]]) {
      const indexToUpdate = stack.pop()!;
      answer[indexToUpdate] = values[i];
    }
    stack.push(i);
  }

  return answer;
}
