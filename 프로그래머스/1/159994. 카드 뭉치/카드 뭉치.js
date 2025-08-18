function solution(cards1, cards2, goal) {
    for (let word of goal) {
        if (cards1.length > 0 && cards1[0] === word) {
            cards1.shift(); // cards1에서 꺼내기
        } else if (cards2.length > 0 && cards2[0] === word) {
            cards2.shift(); // cards2에서 꺼내기
        } else {
            return "No"; // 두 카드 더미 어디에도 없으면 실패
        }
    }
    return "Yes"; // 전부 맞게 뽑을 수 있으면 성공
}