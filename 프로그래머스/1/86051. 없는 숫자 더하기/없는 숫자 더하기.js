function solution(numbers) {
    let sums = [0,1,2,3,4,5,6,7,8,9].reduce((a,b)=>a+b);
    let numSum = numbers.reduce((a,b)=>a+b);
    return sums-numSum;
}