// Q. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 반환하려면?

function solution(s1, s2) {
    return s1.filter(it => s2.includes(it)).length
}