// Q. 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 삼각형을 만들 수 있을 때, 세 변의 길이가 담긴 배열 sides으로 삼각형을 만들 수 있으면 1, 아니면 2를 반환
function solution(sides) {
    let array = sides.sort((a, b) => a - b);
    return array[0] + array[1] > array[2] ? 1 : 2;
}

// 다른 사람 풀이
// function solution(sides) {
//     sides = sides.sort((a,b) => a-b)
//     return sides[0]+sides[1] > sides[2] ? 1 : 2;
// }