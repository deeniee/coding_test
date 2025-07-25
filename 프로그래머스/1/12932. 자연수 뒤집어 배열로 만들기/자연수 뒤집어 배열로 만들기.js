function solution(n) {
    let str = n.toString();
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(Number(str[i]))
    }

    return arr.reverse();
}