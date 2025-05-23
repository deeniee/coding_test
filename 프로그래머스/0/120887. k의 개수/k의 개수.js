function solution(i, j, k) {
    var count = 0;
    k = k.toString();
    
    for (let n = i; n <= j; n++) {
        let numStr = n.toString()
        
        for (let el of numStr) {
            if(el === k) count++
        }
    }
    return count;
}
