function solution(arr) {
    let x = 0;
    let prev = [...arr];
    
    while (true) {
        let next = prev.map(n => {
            if (n >= 50 && n % 2 === 0) return n / 2;
            else if (n < 50 && n % 2 === 1) return n * 2 + 1;
            else return n;
        });

        if (prev.every((val, i) => val === next[i])) {
            return x;
        }

        prev = next;
        x += 1;
    }
}