function solution(s) {
    return /^\d{4}$|^\d{6}$/.test(s);
}

// function solution(s) {
//     const len = s.length;
//     const isNumeric = [...s].every(c => c >= '0' && c <= '9');
//     return (len === 4 || len === 6) && isNumeric;
// }