function solution(my_string) {
    const array = my_string.toLowerCase().split('');
    const answer = array.sort((a,b)=> a > b ? 1 : -1).join('')
    return answer;
}

// 다른 사람 풀이
// function solution(s) {
//     return [...s.toLowerCase()].sort().join('')
// } ...연산자를 활용해 배열로 변환 및 소문자로 변환, 정렬 후 문자열로 재변환