function solution(n) {
    let array = [];
    for(let i = 1; i <= n; i++) {
        i % 2 === 0 && array.push(i);
    }
    
    let sum = 0;
    array.forEach((item) => {
    sum += item
    });
    
    return sum;
}