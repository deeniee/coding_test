function solution(array) {
    let highNum = 0;
        
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            array[i] < array[j] ? highNum = array[j] : highNum= array[i]
        }
    }
    
    const highNumIndex = array.indexOf(highNum)

    return [highNum, highNumIndex];
}

// 다른 사람 풀이
// function solution(array) {
//     let max = Math.max(...array);
//     return [max, array.indexOf(max)];
// } >> 최댓값을 찾고 그 값의 인덱스를 구함, 훨씬 간결하고 효율적임