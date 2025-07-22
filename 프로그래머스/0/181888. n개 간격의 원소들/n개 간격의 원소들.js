function solution(num_list, n) {
    let result = [];
    for(let i = 0; i < num_list.length; i+=n) {
        result.push(num_list[i])
    }
    return result;
}

// function solution(num_list, n) {
//     return num_list.filter((_, i) => i % n === 0);
// }