// Q. 문자열 my_string과 문자 letter이 매개변수로 주어질 때, my_string에서 letter를 제거한 문자열을 반환하려면?

function solution(my_string, letter) {
    
    const newString = my_string.split('').filter((a)=> a !== letter).join('')
    
    return newString;
}

// 다른 사람 풀이
// function solution(my_string, letter) {
//     const answer = my_string.split(letter).join('')
//     return answer;
// } >> 인자를 기준으로 분리하면 인자는 사라지기 때문에, 자연스럽게 해당 인자를 제외하고 문자열로 병합 가능