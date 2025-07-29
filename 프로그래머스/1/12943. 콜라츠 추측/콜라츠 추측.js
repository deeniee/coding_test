function solution(num) {
    let n = num;
    let count = 0;
    while(n !== 1) {
        n%2 === 0 ? n/=2 : n=n*3+1;
        count++
        
        if (count >= 500) return -1;
    }
    return count;
}