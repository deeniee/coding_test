const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    let answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(str)
    }
    console.log(answer.join(''))
});