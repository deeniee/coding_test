function solution(n) {
    let base3 = n.toString(3);
    let reversed = base3.split('').reverse().join('');

    return parseInt(reversed, 3);
}