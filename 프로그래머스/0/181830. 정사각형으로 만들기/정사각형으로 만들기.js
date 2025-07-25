function solution(arr) {
    var squareArr = [];
    const maxLen = Math.max(...arr.map(a => a.length), arr.length);
    
    for (let i = 0; i < maxLen; i++) {
        if (arr[i] && arr[i].length === maxLen) {
            squareArr.push(arr[i])
        } else if (arr[i] && arr[i].length !== maxLen) {
            let len = arr[i].length
            squareArr.push(arr[i].concat(Array(maxLen-len).fill(0)))
        } else {
            squareArr.push(Array(maxLen).fill(0))
        }
    }
    return squareArr;
}

// 간결한 버전
// function solution(arr) {
//     const maxLen = Math.max(arr.length, ...arr.map(row => row.length));
//     return Array.from({ length: maxLen }, (_, i) =>
//         (arr[i] || []).concat(Array(maxLen - (arr[i]?.length || 0)).fill(0))
//     );
// }