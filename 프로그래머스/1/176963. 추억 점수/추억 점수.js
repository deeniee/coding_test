function solution(name, yearning, photo) {
    var answer = [];
    for(let p of photo) {
        let sum = 0;
        for(let person of p) {
            let idx = name.indexOf(person)
            if (idx !== -1) {
                sum += yearning[idx]; 
            }
        }
        answer.push(sum);
    }
    return answer;
}