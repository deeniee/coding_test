function solution(s) {
    var answer = '';
    let len = s.length;
    let center = (len-1)/2;
    return len%2===0 ? [...s].slice(center,center+2).join('') : [...s][center];
}