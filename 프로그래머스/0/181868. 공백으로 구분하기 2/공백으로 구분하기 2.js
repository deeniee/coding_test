function solution(my_string) {  
    return my_string.split(' ').filter(v => v.length !== 0);
}

// function solution(my_string) {  
//     return my_string.trim().split(/\s+/);
// } >> 정규표현식 활용, 앞뒤 공백 제거를 위해 trim 활용