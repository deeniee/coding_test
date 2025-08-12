function solution(k, m, score) {
    let profit = 0;
    let sorted = score.sort((a,b) => b - a);
    let arr = [];

    for(let i = 0; i < sorted.length; i += m) {
        let box = sorted.slice(i, i + m);
        if(box.length === m) {
            arr.push(box);
        }
    }
    
    for(let box of arr) {
        profit += Math.min(...box) * m;
    }
    
    return profit;
}