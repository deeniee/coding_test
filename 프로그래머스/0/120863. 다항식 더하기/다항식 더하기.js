function solution(polynomial) {
    let array = polynomial.split(' + ');
    let polyNum = [];
    let normalNum = [];

    for (let i = 0; i < array.length; i++) {
        if(array[i].includes('x')) polyNum.push(array[i]);
        else normalNum.push(array[i]);
    }

    let calPoly = polyNum
        .map(n => n === 'x' ? 1 : Number(n.replace('x', '')))
        .reduce((a, b) => a + b, 0);

    let calNormal = normalNum.length > 0 
        ? normalNum.map(Number).reduce((a, b) => a + b, 0) 
        : 0;

    if (calPoly && calNormal) return `${calPoly === 1 ? '' : calPoly}x + ${calNormal}`;
    if (calPoly) return `${calPoly === 1 ? '' : calPoly}x`;
    if (calNormal) return `${calNormal}`;
    
    return '';
}
