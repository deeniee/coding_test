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
    let array = [...str]
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
    // [...str].forEach(c => console.log(c))
});