function solution(left, right) {
    var nums = [];
    let sum = 0;
    for(let i = left; i <= right; i++) {
        nums.push(i)
    }
    for(let num of nums) {
        let count = 0;
        for(let i = 1; i <= num; i++) {
            if (num%i === 0) count+=1;
        }
        count%2 === 0 ? sum+=num : sum-=num
    }

    return sum;
}