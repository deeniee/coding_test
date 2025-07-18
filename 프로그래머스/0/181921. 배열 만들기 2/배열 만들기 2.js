function solution(l, r) {
    const queue = ['5'];  // 0으로 시작하는 수 무시, 최소 5
    const result = [];

    while (queue.length > 0) {
        const current = queue.shift();
        const num = Number(current);

        if (num > r) continue;
        if (num >= l) result.push(num);

        queue.push(current + '0');
        queue.push(current + '5');
    }

    return result.length ? result : [-1];
}