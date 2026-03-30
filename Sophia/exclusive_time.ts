// https://leetcode.com/problems/exclusive-time-of-functions/description/


function exclusiveTime(n: number, logs: string[]): number[] {
    const res: number[] = new Array(n).fill(0);
    const stack: number[] = [];
    let prevTime: number = 0;

    for (const log of logs) {
        const [idStr, type, timeStr] = log.split(':');
        const id = parseInt(idStr);
        const timestamp = parseInt(timeStr);

        if (type === 'start') {
            
            if (stack.length > 0) {
                const activeId = stack[stack.length - 1];
                res[activeId] += timestamp - prevTime;
            }
            stack.push(id);
            prevTime = timestamp;
        } else {
            
            const finishedId = stack.pop()!;
            res[finishedId] += timestamp - prevTime + 1;
            prevTime = timestamp + 1;
        }
    }

    return res;
}


