function solution(my_string, s, e) {
    let reversed = [...my_string.slice(s,e+1)].reverse().join('');
    let startStr = [...my_string.slice(0, s)].join('');
    let endStr = [...my_string.slice(e+1)].join('');
    
    return startStr+reversed+endStr;
}