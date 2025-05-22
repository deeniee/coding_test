function solution(n) {
    let answer = 0;
    
    for(let i = 1; i <= n; i++) {
        let count = 0;
        
        for(let j = 1; j <= i; j++) {
            count += (i%j === 0) ? 1 : 0 
        }
        answer += (count >= 3) ? 1 : 0;
    }
    return answer
}