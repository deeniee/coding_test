// Q. n명이 주문한 피자를 남기지 않고 먹어야 할 때, 최소 몇판을 시켜야할까?

function solution(n) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b); // 최대 공약수
    const lcm = (a, b) => (a * b) / gcd(a, b); // 최소 공배수

    const totalSlices = lcm(n, 6);
    const pizzas = totalSlices / 6;

    return pizzas;
}

// 다른 사람 풀이
// const solution = (n) => {
//     let piece = 6

//     while(true) {
//         if (piece % n === 0) {
//             break
//         }
//         piece += 6
//     }

//     return piece / 6
// }