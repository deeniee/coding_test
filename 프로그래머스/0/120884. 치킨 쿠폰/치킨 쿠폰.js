function solution(chicken) {
    let totalService = 0;
    let service = 0;
    let coupon = chicken;
    
    while (coupon >= 10) {
        service = Math.floor(coupon / 10)
        totalService += service
        coupon = (coupon % 10) + service
    }
    return totalService;
}