function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}

// 다른 사람 풀이 1
// function solution(balls, share) {
//     var result = 1;
//     while(share > 0){
//         result = result * balls / share;
//         balls = balls - 1;
//         share = share - 1;
//     }
//     return Math.round(result);
// } >> share가 0이 될 때까지 반복하여 result에 값 저장

// 다른 사람 풀이 2
// const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1)

// function solution(balls, share) {
//      return Math.round(factorial(balls) / factorial(balls - share) / factorial(share))
// }