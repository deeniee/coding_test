function solution(s) {
    let arr = s.split(' ');

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let converted = '';

        for (let j = 0; j < word.length; j++) {
            converted += j % 2 === 0 
                ? word[j].toUpperCase() 
                : word[j].toLowerCase();
        }

        arr[i] = converted;
    }

    return arr.join(' ');
}