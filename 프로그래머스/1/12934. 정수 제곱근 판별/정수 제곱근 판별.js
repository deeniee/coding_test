function solution(n) {
    var squareRoot = Math.sqrt(n);
    return squareRoot%1 === 0 && squareRoot > 0 ? (squareRoot+1)**2 : -1;
}