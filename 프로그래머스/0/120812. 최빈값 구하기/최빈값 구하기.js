// Q. 정수 배열 array의 최빈값이 하나라면 최빈값을 반환, 그렇지 않다면 -1을 반환하려면?

function solution(array) {
    const check = array.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
        return accumulator;
    }, {}); // 최빈값 구하기

    let maxCount = 0;
    let modes = [];

    for (let key in check) {
        const count = check[key];

        if (count > maxCount) {
            maxCount = count;
            modes = [Number(key)];
        } else if (count === maxCount) {
            modes.push(Number(key)); 
        }
    }

    return modes.length === 1 ? modes[0] : -1; // 최빈값이 하나라면 그 값을 반환, 아니라면 -1 반환
}