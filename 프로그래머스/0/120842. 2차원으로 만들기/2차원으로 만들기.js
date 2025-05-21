function solution(num_list, n) {
    var answer = [];
    for (let i = 0; i < num_list.length; i+=n) {
        let pair =[];
        pair = num_list.slice(i,i+n);
        answer.push(pair);
    }
    return answer;
}

// 다른 사람 풀이
// function solution(num_list, n) {
//     return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
// }