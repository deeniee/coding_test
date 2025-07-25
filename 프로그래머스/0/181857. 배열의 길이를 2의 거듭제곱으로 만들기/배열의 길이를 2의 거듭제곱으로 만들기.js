function solution(arr) {
    const len = arr.length;
    let power = 1;

    while (power < len) {
        power *= 2;
    }

    const diff = power - len;
    return arr.concat(Array(diff).fill(0));
}