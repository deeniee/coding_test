function solution(sizes) {
    var answer = 0;
    let width = [];
    let length = [];
    for(let size of sizes) {
        size.sort((a,b)=>b-a)
        width.push(size[0])
        length.push(size[1])
    }
    return Math.max(...width)*Math.max(...length);
}