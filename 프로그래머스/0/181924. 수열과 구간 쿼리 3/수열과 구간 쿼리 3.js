function solution(arr, queries) {
    let answer = [...arr];
    for (let [i, j] of queries) {
        let temp = answer[i];
        answer[i] = answer[j];
        answer[j] = temp;
    }
    return answer;
}