function solution(s) {
    let array = s.split(' ')
    let numArray = array.map((x,i)=> !isNaN(Number(x)) ? Number(x) : Number(-(array[i-1])));
    let sum = numArray.reduce((acc,cur)=>acc+cur)
    return sum;
}

// 다른 사람 풀이
// function solution(s) {
//     const stack = []

//     s.split(' ').forEach((target) => {
//         if(target === 'Z') stack.pop();
//         else stack.push(+target)
//     })

//     return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
// }