function getAlphabetIndex(char) {
  const code = char.toUpperCase().charCodeAt(0); // 대문자로 변환 후 유니코드 값 획득
  if (code >= 65 && code <= 90) { // A(65) ~ Z(90) 범위 확인
    return code - 65;
  } else {
    return -1;
  }
}

function getAlphabetFromIndex(index) {
  if (index < 0 || index > 25) {
    return null; // 유효하지 않은 인덱스 처리
  }
  const charCode = 'a'.charCodeAt(0) + index;
  return String.fromCharCode(charCode);
}

function solution(s, skip, index) {
    var arr = [...s];
    var skipArr = [...skip];
    let newArr = [];
    let skipIndexs = [];
    
    for (let a of skipArr) {
        let skipIndex = getAlphabetIndex(a);
        skipIndexs.push(skipIndex)
    }
    
    for (let alpha of arr) {
    let nowIndex = getAlphabetIndex(alpha);
    let moved = 0;

    while (moved < index) {
        nowIndex = (nowIndex + 1) % 26; // 다음 알파벳 (z 다음은 a)
        if (!skipIndexs.includes(nowIndex)) {
        moved++; 
        }
    }

    newArr.push(getAlphabetFromIndex(nowIndex));
}
  
    return newArr.join('');
}

// function solution(s, skip, index) {
//     const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
//                       "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
//                       "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
//     return s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
// }