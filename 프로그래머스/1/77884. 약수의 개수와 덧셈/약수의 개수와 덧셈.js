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

// 약수의 개수가 홀수인 수는 제곱수일 때뿐이라는 수학적 성질을 활용
// function solution(left, right) {
//     let sum = 0;
//     for (let i = left; i <= right; i++) {
//         Math.sqrt(i) % 1 === 0 ? sum -= i : sum += i;
//     }
//     return sum;
// }