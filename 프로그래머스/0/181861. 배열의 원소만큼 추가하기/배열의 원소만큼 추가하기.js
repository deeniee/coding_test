function solution(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j <= arr[i]; j++) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

// const solution=a=>a.map(v=>Array(v).fill(v)).flat()