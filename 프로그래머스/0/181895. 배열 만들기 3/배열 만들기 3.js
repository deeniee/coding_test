function solution(arr, intervals) {
    var result = [];
    for (let [a,b] of intervals) {
        arr.slice(a,b+1).map(v=>result.push(v))
    }
    return result;
}