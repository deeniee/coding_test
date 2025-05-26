function solution(n) {
    var answer = [];
    let divisor = 2;
        
    while (1 < n) {
        if (n % divisor === 0) {
            answer.push(divisor);
            n /= divisor;
        } else {
            divisor++;
        }
    }
    
    return [... new Set(answer)];
}