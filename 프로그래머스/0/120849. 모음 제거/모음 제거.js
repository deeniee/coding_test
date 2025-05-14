// Q. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 반환하려면?

function solution(my_string) {
    const array = my_string.split('');
    const gather = ['a','e','i','o','u'];
    
    const filtered = array.filter(it => !gather.includes(it));
    
    return filtered.join('');
}