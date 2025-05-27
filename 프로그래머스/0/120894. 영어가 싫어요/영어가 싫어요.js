function solution(numbers) {
    let num = {
        'zero' : 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9,
    }
    for (let word in num) {
        numbers = numbers.replaceAll(word, num[word]);
    }
    
    return Number(numbers);
}

// 다른 사람 풀이 1
// var solution=n=>Number(['zero','one','two','three','four','five','six','seven','eight','nine'].reduce((t,s,i)=>t.replaceAll(s,i),n))

// 다른 사람 풀이 2
// function solution(numbers) {
//     const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
//     for(let i = 0 ; i<number.length; i++){
//         numbers = numbers.split(number[i]).join(i)
//     }
//     return +numbers
// } >>> 인덱스를 활용한 풀이
