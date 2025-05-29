function solution(score) {
    let sum = score.map(x => (x[0]+x[1])/2);
    
    let order = [...sum].sort((a,b) => b-a)
    
    return sum.map(x => order.indexOf(x)+1);
}

// 다른 사람 풀이
// function solution(score) {
//   return score.map((el) => {
//     return (
//       score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
//     );
//   });
// }

// chatGPT 코드
// function solution(score) {
//     const avg = score.map(([a, b]) => (a + b) / 2);
//     const sorted = [...avg].sort((a, b) => b - a);
//     const rankMap = new Map();

//     sorted.forEach((v, i) => {
//         if (!rankMap.has(v)) rankMap.set(v, i + 1);
//     });

//     return avg.map(v => rankMap.get(v));
// } >> indexOf 대신 Map으로 최적화