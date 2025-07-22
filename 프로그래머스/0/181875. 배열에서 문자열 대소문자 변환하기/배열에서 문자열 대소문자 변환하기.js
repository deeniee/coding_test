function solution(strArr) {
    let newArr = []
    for (let i = 0; i < strArr.length; i++ ) {
        if (i%2 === 0) {
            newArr.push(strArr[i].toLowerCase())
        } else {
            newArr.push(strArr[i].toUpperCase())
        }
    }
    return newArr;
}

// 다른 사람 풀이
// function solution(strArr) {
//     return strArr.map((v, i) => i % 2 === 0 ? v.toLowerCase() : v.toUpperCase());
// }


