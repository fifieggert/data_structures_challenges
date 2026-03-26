// https://leetcode.com/problems/summary-ranges/description/

function summaryRanges(nums: number[]): string[] {
    const result: string[] = [];
    
    for (let i = 0; i < nums.length; i++) {
        const start = nums[i];
        
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }
        
        const end = nums[i];
        
        if (start === end) {
            result.push(`${start}`);
        } else {
            result.push(`${start}->${end}`);
        }
    }
    
    return result;
} // <--- A função termina aqui

// Agora sim, o comando para testar no terminal:
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));