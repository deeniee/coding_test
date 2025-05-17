function solution(n, numlist) {
    var answer = []
    const multiple = numlist.map(i => i%n === 0 && answer.push(i));
    return answer;
}

// 다른 사람 풀이
// function solution(n, numlist) {
//     return numlist.filter(num => num % n === 0);
// } >> filter를 통해 조건에 맞는 요소를 바로 반환, 훨씬 간결하게 처리 가능