function solution(s) {
    let array = s.split(' ')
    let numArray = array.map((x,i)=> !isNaN(Number(x)) ? Number(x) : Number(-(array[i-1])));
    let sum = numArray.reduce((acc,cur)=>acc+cur)
    return sum;
}