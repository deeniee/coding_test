function solution(s) {
    let len = s.length;
    let center = (len-1)/2;
    return len%2===0 ? [...s].slice(center,center+2).join('') : [...s][center];
}

// function solution(s) {
//   return s.length % 2 === 0
//     ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
//     : s[Math.floor(s.length / 2)];
// }