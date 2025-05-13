function solution(n, k) {
const service = Math.floor(n/10)
const price = n*12000 + (k-service)*2000
    return price;
}