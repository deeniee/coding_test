function solution(a, b) {
    var answer = 0;
    let strA = a.toString()
    let strB = b.toString()
    
    if (Number(strA+strB) > Number(strB+strA) || Number(strA+strB) === Number(strB+strA)) {
        answer = Number(strA+strB)
    } else if (Number(strA+strB) < Number(strB+strA)) {
        answer = Number(strB+strA)
    }
    return answer;
}