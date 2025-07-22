function solution(my_string, m, c) {
    const rows = [];

    for (let i = 0; i < my_string.length; i += m) {
        rows.push(my_string.slice(i, i + m));
    }

    return rows.map(row => row[c - 1]).join('');
}

// function solution(my_string, m, c) {
//     return [...my_string].filter((_, i) => i % m === c - 1).join('');
// }