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

// 다른 사람 풀이
// function solution(chicken) {
//     var answer = parseInt((chicken-1) / 9);
//     return answer;
// } >> 첫 쿠폰을 받기 위해선 10마리를 시켜야한다. 그 후 쿠폰 1장이 있는 상태로 9마리만 시키면 서비스 치킨을 시킬 수 있으니, 9로 나누면 서비스 치킨 수를 셀 수 있다. 