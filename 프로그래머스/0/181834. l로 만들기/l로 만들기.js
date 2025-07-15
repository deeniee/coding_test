function solution(myString) {
    return [...myString].map(v=>v >= 'a' && v <= 'l' ? 'l' : v).join('');
}

// 다른 사람 풀이
// const solution = myString => myString.replace(/[a-k]/g,'l')