function solution(myString, pat) {
    var newString = [...myString].map(i=>i === 'A' ? 'B' : 'A').join('');
    
    return newString.includes(pat) ? 1 : 0;
}

// 
// const solution = (myString, pat) => [...myString].map(v => v === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 