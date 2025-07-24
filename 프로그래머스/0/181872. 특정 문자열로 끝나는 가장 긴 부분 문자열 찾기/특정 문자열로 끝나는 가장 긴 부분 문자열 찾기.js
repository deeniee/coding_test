function solution(myString, pat) {
    let arr = [];
    for (let i = 0; i < [...myString].length; i++) {
        arr.push([...myString].slice(0,i+1).join(''))
    }
    let filtered = arr.filter(v=>v.endsWith(pat))
    
    return filtered[filtered.length-1];
}

// function solution(myString, pat) {
//   return myString.substring(0, myString.lastIndexOf(pat) + pat.length);
// }