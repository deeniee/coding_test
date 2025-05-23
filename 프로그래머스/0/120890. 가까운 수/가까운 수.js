function solution(array, n) {
    return array.reduce((a, b) => {
        const diffA = Math.abs(n - a);
        const diffB = Math.abs(n - b);
        if (diffA === diffB) return a < b ? a : b;
        return diffA < diffB ? a : b;
    });
}
