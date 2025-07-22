function solution(num, total) {
    let arr = [];
    let gap = 0;
    
    for (let i = 0; i < num; i++) {
        gap += i
    }
    
    let startNum = (total-gap)/num
    
    for (let j = 0; j < num; j++) {
        arr.push(startNum + j)
    }
    
    return arr;
}

// function solution(num, total) {
//     const startNum = (total - (num * (num - 1)) / 2) / num;
//     return Array.from({ length: num }, (_, i) => startNum + i);
// }