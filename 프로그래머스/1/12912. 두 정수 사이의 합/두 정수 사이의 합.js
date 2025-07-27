function solution(a, b) {
    var arr = [];
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    for (let i = min; i <= max; i++) {
        arr.push(i)
    }
    return arr.reduce((a,b)=>a+b,0);
}