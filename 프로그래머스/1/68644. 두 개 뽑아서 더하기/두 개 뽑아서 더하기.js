function solution(numbers) {
    var nums = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if (i !== j) nums.push(numbers[i]+numbers[j])
        }
    }
     return nums.sort((a,b)=> a-b).filter((v,i)=> v!==nums[i+1]);
}