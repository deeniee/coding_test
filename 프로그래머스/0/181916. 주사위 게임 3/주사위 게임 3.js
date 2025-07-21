function solution(a, b, c, d) {
    const counts = {};
    const nums = [a, b, c, d];

    // 1. 숫자별 개수 세기
    for (let num of nums) {
        counts[num] = (counts[num] || 0) + 1;
    }

    const entries = Object.entries(counts); // [['2', 2], ['3', 2]] 같은 형식
    const keys = Object.keys(counts).map(Number); // 숫자로 변환
    const values = Object.values(counts); // [2, 2] 같은 빈도들

    let answer = 0;

    // 2. 조건 분기
    if (entries.length === 1) {
        // 같은 숫자 4개 (예: 2,2,2,2)
        answer = keys[0] * 1111;
    } else if (entries.length === 2) {
        if (values.includes(3)) {
            // 3개 + 1개 (예: 3,3,3,1)
            const p = Number(entries.find(e => e[1] === 3)[0]);
            const q = Number(entries.find(e => e[1] === 1)[0]);
            answer = (10 * p + q) ** 2;
        } else {
            // 2개 + 2개 (예: 2,2,5,5)
            const [p, q] = keys;
            answer = (p + q) * Math.abs(p - q);
        }
    } else if (entries.length === 3) {
        // 2개 + 1개 + 1개
        const p = Number(entries.find(e => e[1] === 2)[0]);
        const rest = entries.filter(e => e[1] === 1).map(e => Number(e[0]));
        answer = rest[0] * rest[1];
    } else {
        // 모두 다른 숫자
        answer = Math.min(...keys);
    }

    return answer;
}


// function solution(a, b, c, d) {
//   const map = new Map();
//   for (const data of [a, b, c, d]) {
//     map.set(data, (map.get(data) || 0) + 1);
//   }

//   const sortedArr = [...map].sort((a, b) => {if (a[1] === b[1]) return b[0] - a[0]; else return b[1] - a[1]});

//   if (map.size === 1) return 1111 * sortedArr[0][0];
//   else if (map.size === 3) return sortedArr[1][0] * sortedArr[2][0];
//   else if (map.size === 4) return sortedArr[3][0];
//   else if (sortedArr[0][1] === 3) return (10 * sortedArr[0][0] + sortedArr[1][0]) ** 2;
//   else return (sortedArr[0][0] + sortedArr[1][0]) * (sortedArr[0][0] - sortedArr[1][0]);
// }