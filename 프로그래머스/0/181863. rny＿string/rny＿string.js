function solution(rny_string) {
    return [...rny_string].map(v => v === 'm' ? 'rn' : v).join('');
}

// function solution(rny_string) {
//     return rny_string.replaceAll(/m/g, "rn");
// } >> 정규표현식 활용