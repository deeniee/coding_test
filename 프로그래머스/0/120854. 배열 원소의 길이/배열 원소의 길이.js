function solution(strlist) {
    var answer = [];
    for (let i = 0; i < strlist.length; i++) {
        answer.push(strlist[i].length);
    }
    return answer;
}

// 다른 사람 풀이
// function solution(strlist) {
//     return strlist.map((el) => el.length)
// } >> 배열을 매핑하며 각 요소의 길이 반환, 훨씬 효율적인 방법