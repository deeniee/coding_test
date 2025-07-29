function solution(n) {
    var str = [];
    for(let i = 0; i < n; i++) {
        i%2===0? str.push('수') : str.push('박');
    }
    return str.join('');
}