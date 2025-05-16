function solution(age) {
    let answer = [];
    
    const ageArray = [...age.toString()]
    const alphaArray = ['a','b','c','d','e','f','g','h','i','j'];

    let switchToAlpha = ageArray.map((i) => answer.push(alphaArray[i]));
    
    return answer.join('');
}

// 다른 사람 풀이
// function solution(age) {
//   return age
//     .toString()
//     .split("")
//     .map((v) => "abcdefghij"[v])
//     .join("");
// } >> 문자열 자체도 인덱스로 접근하여 매핑으로 알파벳으로 교체