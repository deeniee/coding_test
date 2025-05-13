function solution(money) {
    var answer = [];
    const cups = Math.floor(money/5500)
    const changes = money-cups*5500
    answer = [cups, changes]
    return answer;
}