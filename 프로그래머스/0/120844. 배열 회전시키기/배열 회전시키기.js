function solution(numbers, direction) {
    return direction === 'right' ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)] : [...numbers.slice(1), numbers[0]];
}

// 다른 사람 풀이
// function solution(numbers, direction) {
//     var answer = [];

//     if ("right" == direction) {
//         numbers.unshift(numbers.pop());
//     } else {
//         numbers.push(numbers.shift());
//     }

//     answer = numbers;

//     return answer;
// } >> push() : 배열의 맨 끝에 값 추가 / unshift() : 배열의 맨 앞에 값 추가
//   >> pop() : 배열의 맨 끝의 값 제거 / shift() : 배열의 맨 앞의 값 제거