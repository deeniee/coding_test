function solution(arr) {
    var start = arr.indexOf(2);
    var end = arr.lastIndexOf(2);
    return arr.includes(2) ? arr.slice(start,end+1) : [-1];
}