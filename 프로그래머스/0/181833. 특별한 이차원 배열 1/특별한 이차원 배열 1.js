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

// function solution(n) {
//   const answer = Array.from(Array(n), () => Array(n).fill(0));

//   for (let i = 0; i < n; i++) {
//     answer[i][i] = 1;
//   }

//   return answer;
// } >> 원소가 0인 이차원 배열을 만든 후, 해당하는 원소를 1로 만듦