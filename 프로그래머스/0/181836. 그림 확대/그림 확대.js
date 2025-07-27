function solution(picture, k) {
    let newPic = [];
    for(let i=0; i<picture.length; i++) {
        for(let j=0; j<k; j++) {
            let line = [...picture[i]].map(v=>v.repeat(k)).join('');
            newPic.push(line);
        }
    }
    return newPic;
}

// 개선된 코드
// function solution(picture, k) {
//     const newPic = [];

//     for (const row of picture) { 
//         const scaledRow = [...row].map(char => char.repeat(k)).join('');
//         for (let i = 0; i < k; i++) {
//             newPic.push(scaledRow);
//         }
//     }

//     return newPic;
// } >> picture의 각 요소만 반복하면 되니, 간단하게 for of문 사용