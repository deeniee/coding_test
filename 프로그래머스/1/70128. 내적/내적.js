function solution(a, b) {
    let dotProduct = [];
    for(let i = 0; i < a.length; i++) {
        dotProduct.push(a[i]*b[i])
    }
    return dotProduct.reduce((a,b)=>a+b);
}