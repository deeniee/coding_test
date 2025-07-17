function solution(n) {
    var answer = [];
    for(let i = 0; i < n; i++) {
        let arr = []
        for(let j = 0; j < n; j++) {
            j === i ? arr.push(1) : arr.push(0)
        }
        answer.push(arr)
    }
    return answer;
}