function solution(num_list) {
    var evens = [];
    var odds = [];
    
    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) {
            evens.push(num_list[i]); 
        } else {
            odds.push(num_list[i]);
        }
    }
    
    var evenSum = evens.reduce((a,b)=> a+b);
    var oddSum = odds.reduce((a,b)=> a+b);
    
    return Math.max(evenSum, oddSum);
}