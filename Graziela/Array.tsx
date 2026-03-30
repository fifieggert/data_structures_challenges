// Array: https://leetcode.com/problems/the-skyline-problem/description/?envType=problem-list-v2&envId=array


function getSkyline(buildings: number[][]): number[][] {
  const events: [number, number][] = [];

  for (const [l, r, h] of buildings) {
    events.push([l, -h]);
    events.push([r, h]);
  }

  events.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });

  const result: number[][] = [];
  const heights: number[] = [0];
  let prevMax = 0;

  for (const [x, h] of events) {
    if (h < 0) {
      heights.push(-h);
    } else {
      const index = heights.indexOf(h);
      if (index !== -1) heights.splice(index, 1);
    }
    heights.sort((a, b) => b - a);

    const currentMax = heights[0];

    if (currentMax !== prevMax) {
      result.push([x, currentMax]);
      prevMax = currentMax;
    }
  }

  return result;
}
