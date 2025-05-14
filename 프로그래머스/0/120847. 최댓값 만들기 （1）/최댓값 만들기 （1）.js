function solution(numbers) {
    const array = numbers.sort((a,b) => {return b - a})
    return array[0]*array[1];
}