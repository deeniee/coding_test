function solution(array, n) {
    return array.reduce((a, b) => {
        const diffA = Math.abs(n - a);
        const diffB = Math.abs(n - b);
        if (diffA === diffB) return a < b ? a : b;
        return diffA < diffB ? a : b;
    });
}

// 다른 사람 풀이
// function solution(array, n) {
//     array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

//     return array[0];
// } >>> 절댓값을 활용해, 절댓값이 작은 수부터 오름차순으로 정렬 후, array의 0번 값을 반환
//   >>> 절댓값을 활용했다는 공통점이 있지만 이 코드가 더욱 효율적임