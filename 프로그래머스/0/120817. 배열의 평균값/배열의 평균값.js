// Q. numbers의 원소의 평균값 구하기

function solution(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const average = sum / numbers.length;
    return average;
}

// 다른 사람 풀이
// function solution(numbers) {
//     var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
//     return answer;
// } >> reduce 메서드 : 배열의 여러개의 값을 하나의 값으로 축소

