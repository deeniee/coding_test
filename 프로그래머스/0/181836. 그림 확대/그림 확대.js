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