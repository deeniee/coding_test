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