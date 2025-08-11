function solution(n, m) {
    var answer = [];
    
    let lgNum = Math.max(n,m);
    let smNum = Math.min(n,m);
    
    let gcd = (a,b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    }
    let lcm = (a,b) => {
        return a*b/gcd(a,b)
    }
    
    answer.push(gcd(lgNum, smNum), lcm(lgNum, smNum));
    
    return answer;
}