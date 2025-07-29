function solution(n) {
    var answer = 0;
    let str = n.toString();
    let sorted = [...str].sort((a,b)=>b-a).join('')
    return Number(sorted);
}