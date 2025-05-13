function solution(n) {
    var answer = 0;
    
    const num = Number.isInteger(Math.sqrt(n))
    num ? answer = 1 : answer = 2
    

    return answer;
}