function solution(number, limit, power) {
    let arr = [];

    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count += (j * j === i) ? 1 : 2;
            }
        }
        arr.push(count);
    }

    return arr
        .map(v => v > limit ? power : v)
        .reduce((a, b) => a + b, 0);
}