function solution(x) {
    let arr = x.toString().split('').map(v=>Number(v));
    let sum = arr.reduce((a,b)=>a+b);
    return x%sum === 0 ? true : false;
}

// function solution(x) {
//     let num = x;
//     let sum = 0;
//     do {
//         sum += x%10;
//         x = Math.floor(x/10);
//     } while (x>0);

//     return !(num%sum);
// }