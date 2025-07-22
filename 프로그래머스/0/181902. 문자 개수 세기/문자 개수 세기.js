function solution(my_string) {
    const result = new Array(52).fill(0);

    for (let char of my_string) {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            // A~Z
            result[code - 65]++;
        } else if (code >= 97 && code <= 122) {
            // a~z
            result[code - 97 + 26]++;
        }
    }

    return result;
}

// function solution(m) {
//     var answer = [];
//     let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     let a = [];
//     a.length = 52;
//     a.fill(0);

//     m.split("").map((n)=>{
//         a[al.indexOf(n)]+=1
//     })

//     return a;
// }