function solution(hp) {
    if (hp % 5 === 0) {
        return Math.floor(hp / 5)
    }
    if ( hp % 5 % 3 === 0 ) {
        return Math.floor(hp / 5) + Math.floor(hp % 5 / 3)
    }
    if ( hp % 5 % 3 % 1 === 0 ) {
        return Math.floor(hp / 5) + Math.floor(hp % 5 / 3) + Math.floor(hp % 5 % 3 / 1)
    }
 
}

// 다른 사람 풀이
// function solution(hp) {
//     return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
// } >> 나머지를 활용하는 것은 같지만, 더 간결한 접근. 나머지가 0이라면 이 후 계산이 0이 되기 때문에 영향을 주지 않으니, 하나의 계산식으로도 작성 가능