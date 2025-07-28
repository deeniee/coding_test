function solution(x) {
    let arr = x.toString().split('').map(v=>Number(v));
    let sum = arr.reduce((a,b)=>a+b);
    return x%sum === 0 ? true : false;
}