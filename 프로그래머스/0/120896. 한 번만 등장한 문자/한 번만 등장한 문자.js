function solution(s) {
    let answer = []
    const array = [...s]
    const check = array.sort().map((n,i)=> n !== array[i+1] && n !== array[i-1] ? answer.push(n) : null);
    return answer.join('');
}
// 다른 사람 풀이
// function solution(s) {
//     let res = [];
//     for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
//     return res.sort().join('');
// } >>> 반복문을 활용, 첫 c의 인덱스 값과 마지막 c의 인덱스 값이 같으면 c를 res에 저장 