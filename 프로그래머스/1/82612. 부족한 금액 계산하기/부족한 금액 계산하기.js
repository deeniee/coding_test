function solution(price, money, count) {
    const total = price * count * (count + 1) / 2;
    return Math.max(0, total - money);
}