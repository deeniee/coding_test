function solution(arr, divisor) {
    var nums = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i]%divisor === 0) nums.push(arr[i]);
    }
    return nums.length > 0 ? nums.sort((a,b)=>a-b) : [-1];
}

// function solution(arr, divisor) {
//     var answer = arr.filter(v => v%divisor == 0);
//     return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
// }