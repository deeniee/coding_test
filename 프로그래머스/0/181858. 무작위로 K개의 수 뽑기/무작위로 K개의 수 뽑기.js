function solution(arr, k) {
    var sorted = [];
    for (let i=0; i < arr.length; i++) {
        if (!arr.slice(0,i).includes(arr[i])) {
            sorted.push(arr[i])
        }
    }
    let diff = k - sorted.length
    
    return sorted.length >= k ? sorted.slice(0,k) : sorted.concat(Array(diff).fill(-1));
}