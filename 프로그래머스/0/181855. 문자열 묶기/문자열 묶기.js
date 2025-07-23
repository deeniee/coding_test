function solution(strArr) {
    const counter = {}; // 길이별 개수 저장

    for (let str of strArr) {
        const len = str.length;
        counter[len] = (counter[len] || 0) + 1;
    }

    return Math.max(...Object.values(counter)); // 가장 많은 그룹의 개수 반환
}