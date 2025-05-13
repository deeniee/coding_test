function solution(n) {
    let array = [];
    for(let i = 1; i <= n; i++) {
        i % 2 === 0 && array.push(i);
    }
    
    let sum = 0;
    array.forEach((item) => {
    sum += item
    });
    
    return sum;
}

// 다른 사람 풀이
// function solution(n) {
//     var half = Math.floor(n/2);
//     return half*(half+1);
// } >> n/2를 정수로 바꿔준 half를 활용