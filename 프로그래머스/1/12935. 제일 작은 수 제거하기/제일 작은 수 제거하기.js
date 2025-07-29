function solution(arr) {
    let small = [...arr].sort((a,b)=>a-b)[0]
    return arr.length > 1 ? arr.filter(v=>v!==small) : [-1];
}