function solution(answers) {
    var arr = [];
    let highScore = [];
    let person1 = [1,2,3,4,5];
    let person2 = [2,1,2,3,2,4,2,5];
    let person3 = [3,3,1,1,2,2,4,4,5,5];
    
    let people = [person1, person2, person3];
    let leng = answers.length;
    
    for (let person of people) {
        if (person.length < leng) {
            const extended = Array(leng).fill(0).map((_, i) => person[i % person.length]);
            arr.push(extended);
        } else if (person.length > leng) {
            const sliced = person.slice(0, leng);
            arr.push(sliced);
        } else {
            arr.push(person);
        }
    }
    
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < leng; j++) {
            if (arr[i][j] === answers[j]) count++;
        }
        if (count > maxCount) {
            maxCount = count;
            highScore = [i + 1];
        } else if (count === maxCount) {
            highScore.push(i + 1);
        }
    }
    
    return highScore.sort((a,b)=>a-b);
}


// function solution(answers) {
//     var answer = [];
//     var a1 = [1, 2, 3, 4, 5];
//     var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
//     var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
//     var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
//     var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
//     var max = Math.max(a1c,a2c,a3c);

//     if (a1c === max) {answer.push(1)};
//     if (a2c === max) {answer.push(2)};
//     if (a3c === max) {answer.push(3)};

//     return answer;
// }
