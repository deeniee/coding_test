function solution(score) {
    let sum = score.map(x => (x[0]+x[1])/2);
    
    let order = [...sum].sort((a,b) => b-a)
    
    return sum.map(x => order.indexOf(x)+1);
}