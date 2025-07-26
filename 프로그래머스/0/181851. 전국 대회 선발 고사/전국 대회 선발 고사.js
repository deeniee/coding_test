function solution(rank, attendance) {
    let participants = [];
    for (let i=0; i<rank.length; i++) {
        if (attendance[i]) {
            participants.push(rank[i])
        }
    }
    let sorted = participants.sort((a,b)=>a-b).slice(0,3)
    let [a,b,c] = sorted;
    return 10000*rank.indexOf(a) + 100*rank.indexOf(b) + rank.indexOf(c);
}

// function solution(rank, attendance) {
//   const [a, b, c] = rank
//     .map((r, i) => [r, i])
//     .filter(([_, i]) => attendance[i])
//     .sort(([a], [b]) => a - b);
//   return 10000 * a[1] + 100 * b[1] + c[1];
// }