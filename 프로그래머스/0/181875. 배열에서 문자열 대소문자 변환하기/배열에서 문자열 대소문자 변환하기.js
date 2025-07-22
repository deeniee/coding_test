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