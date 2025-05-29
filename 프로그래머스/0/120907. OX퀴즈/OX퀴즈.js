function solution(quiz) {
    let answer = [];
    let splited = quiz.map(x => x.split(' = '));

    for (let i = 0; i < quiz.length; i++) {
        eval(splited[i][0]) === Number(splited[i][1]) ? answer.push('O') : answer.push('X')
    }
    
    return answer;
}