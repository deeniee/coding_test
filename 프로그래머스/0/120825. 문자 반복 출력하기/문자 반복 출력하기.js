// Q. my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 반환하려면?

function solution(my_string, n) {
    const array = my_string.split('') // 문자열을 배열로 변환
    const repeated = array.map((letter) => letter.repeat(n)); // 배열을 매핑하여 각 요소를 n번씩 반복
    return repeated.join(''); // 배열을 다시 문자열로 변환
}