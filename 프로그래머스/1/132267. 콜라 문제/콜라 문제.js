function solution(a, b, n) {
    var sum = 0;
    
    while (n >= a) {
        let exchange = Math.floor(n/a) * b;
        sum += exchange;
        n = exchange + (n%a);
    }
    return sum;
}