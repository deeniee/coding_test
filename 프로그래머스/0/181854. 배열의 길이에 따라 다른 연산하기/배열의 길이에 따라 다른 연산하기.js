function solution(arr, n) {
    let size = arr.length;
    let newArr = [];
    for(let i = 0; i < size; i++) {
        if (size%2 === 0 && i%2 !== 0) {
            newArr.push(arr[i]+n)
        } else if (size%2 !== 0 && i%2 === 0) {
            newArr.push(arr[i]+n)
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

// const solution = (arr, n) => arr.map((num, idx) => (
//     arr.length % 2 !== idx % 2
//     ? num + n
//     : num
// ))