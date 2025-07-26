function solution(myString, pat) {
    let check = myString.match(new RegExp(pat, "g"));
    let arr = [];
    
    for(let i = 0; i < myString.length; i++) {
        arr.push(myString.slice(i,i+pat.length))
    }
    
    return arr.filter(v=>v===pat).length;
}