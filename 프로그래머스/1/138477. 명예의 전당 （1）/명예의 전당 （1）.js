function solution(k, score) {
    var hallOfFame = [];
    let bottoms = [];
    
    for(let i = 0; i < score.length; i++) {
        hallOfFame.push(score[i])
        hallOfFame.sort((a,b)=>b-a)
        
        bottoms.push(hallOfFame[Math.min(i, k - 1)]) 
    }
    return bottoms;
}