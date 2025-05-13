// Q. 삼각형의 두 변의 길이가 담긴 배열 sides, 나머지 한 변이 될 수 있는 정수의 개수를 반환하려면?
function solution(sides) {
    sides = sides.sort((a, b) => a - b);
    const min = Math.abs(sides[0] - sides[1]) + 1;
    const max = sides[0] + sides[1] - 1;
    
    return max - min + 1;
}

// 다른 사람 풀이
// function solution(sides) {
//     return Math.min(...sides)*2-1
// }

