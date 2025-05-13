// Q. 피자는 두 조각에서 열 조각까지 자를 수 있을 때,
//    피자조각 slice를 n명이 최소 하나 이상의 피자를 먹으려면 최소 몇 판의 피자를 시켜야할까?
function solution(slice, n) {
    return n % slice === 0 ? n / slice : Math.ceil(n / slice)    
}

// 다른 사람 풀이
// function solution(slice, n) {
//     return Math.ceil(n / slice)
// } >> 나머지가 없는 값은 반올림해도 결과는 같기 때문에 이 코드가 더 간결함