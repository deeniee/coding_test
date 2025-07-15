function solution(numLog) {
    let answer = []; 
    numLog.reduce((a,b) => {
    if (b - a === 1) answer.push('w');
    else if (b - a === -1) answer.push('s');
    else if (b - a === 10) answer.push('d');
    else if (b - a === -10) answer.push('a');
    return b ;
    })
    
    return answer.join('');
}


