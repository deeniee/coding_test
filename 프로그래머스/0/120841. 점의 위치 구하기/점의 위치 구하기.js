function solution(dot) {
    const [a, b] = dot
    if (0 < a && 0 < b) {
        return 1;
    } else if (a < 0 && 0 < b) {
        return 2;
    } else if (a < 0 && b < 0) {
        return 3;
    } else {
        return 4;
    }
}

// 다른 사람 풀이
// function solution(dot) {
//     const [num,num2] = dot;
//     const check = num * num2 > 0;
//     return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
// } >> 구조 분해한 두 수를 기준으로 num이 양수일 때, 두 수의 곱이 음수인지 양수인지에 따라 판별 후 결과 반환