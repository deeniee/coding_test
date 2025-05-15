function solution(my_string) {
    const numArray = my_string.replace(/[^0-9]/g, '').split('');
    let sum = 0;
    for(let i = 0; i < numArray.length; i++) {
        sum += Number(numArray[i])
    };
    return sum;
}