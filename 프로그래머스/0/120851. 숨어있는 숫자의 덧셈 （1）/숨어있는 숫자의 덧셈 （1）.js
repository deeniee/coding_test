function solution(my_string) {
    const numArray = my_string.replace(/[^0-9]/g, '').split('');
    let sum = 0;
    for(let i = 0; i < numArray.length; i++) {
        sum += Number(numArray[i])
    };
    return sum;
}

// 다른 사람 풀이
// function solution(my_string) {
//     const answer = my_string.replace(/[^0-9]/g, '')
//                             .split('')
//                             .reduce((acc, curr) => acc + Number(curr), 0);
//     return answer;
// } >> reduce 함수로 배열의 요소를 순회하며 합계를 누적