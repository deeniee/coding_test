function solution(my_string, is_prefix) {
    let prefixs = [];
    let prefix = ''
    for(let i =0; i < my_string.length; i++) {
        prefix = my_string.slice(0,i);
        if (prefix !== '') {
            prefixs.push(prefix);
        }
    }
    return prefixs.includes(is_prefix)? 1 : 0;
}

// function solution(my_string, is_prefix) {
//     return +my_string.startsWith(is_prefix);
// }

// function solution(my_string, is_prefix) {
//     return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
// }