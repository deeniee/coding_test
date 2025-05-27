function solution(bin1, bin2) {
    let num1 = parseInt(bin1, 2)
    let num2 = parseInt(bin2, 2)
    
    let answer = (num1 + num2).toString(2)
    return answer;
}

// function solution(bin1, bin2) {
//     let a = [...bin1].reverse();
//     let b = [...bin2].reverse();
    
//     let maxLength = Math.max(a.length, b.length); >> 두 배열의 길이가 다를 경우 이를 맞춰주기 위헤 0을 추가
//     while (a.length < maxLength) a.push('0');
//     while (b.length < maxLength) b.push('0'); 
    
//     let carry = 0;
//     let result = [];
    
//     for (let i = 0; i < maxLength; i++) {
//         let sum = Number(a[i]) + Number(b[i]) + carry;
//         result.push(sum % 2);
//         carry = Math.floor(sum / 2);
//     }
//     if (carry) result.push(1);
    
//     return result.reverse().join('')    
// }
