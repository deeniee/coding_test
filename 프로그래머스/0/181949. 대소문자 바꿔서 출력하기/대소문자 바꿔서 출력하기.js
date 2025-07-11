const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = [...str].map((a) => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('');
    console.log(answer);
});