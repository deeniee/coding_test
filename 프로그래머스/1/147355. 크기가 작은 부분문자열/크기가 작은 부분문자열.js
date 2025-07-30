function solution(t, p) {
    var candidate = [];
    for(let i = 0; i < t.length; i++) {
        candidate.push([...t].slice(i,i+p.length).join(''))
        
    }
    return candidate.filter(v=>v.length===p.length && v<=p).length;
}