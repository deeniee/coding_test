function solution(intStrs, k, s, l) {
    var answer = [];
    let value = '';
    for(let i = 0; i < intStrs.length; i++) {
        value = Number(intStrs[i].slice(s, s+l))
        if (value > k) {answer.push((value))}
    }
    return answer;
}