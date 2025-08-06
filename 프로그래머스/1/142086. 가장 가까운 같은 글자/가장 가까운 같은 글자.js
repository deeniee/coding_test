function solution(s) {
    let lastIndex = {};
    var result = [];
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (char in lastIndex) {
        result.push(i - lastIndex[char]);
        } else {
            result.push(-1);
        }

        lastIndex[char] = i;
    }
    return result;
}

// 다른 사람 코드
// const solution = (s) =>
//   [...s].map((char, i) => {
//     const count = s.slice(0, i).lastIndexOf(char);
//     return count < 0 ? count : i - count;
//   });