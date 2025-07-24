function solution(str_list) {
    const indexL = str_list.indexOf('l');
    const indexR = str_list.indexOf('r');

    if (indexL === -1 && indexR === -1) {
        return [];
    }

    if (indexL !== -1 && (indexR === -1 || indexL < indexR)) {
        return str_list.slice(0, indexL);
    }

    if (indexR !== -1 && (indexL === -1 || indexR < indexL)) {
        return str_list.slice(indexR + 1);
    }

    return [];
}

// function solution(str_list) {
//     for(let i = 0; i < str_list.length; i++) {
//         if (str_list[i] === 'l') return str_list.slice(0, i);
//         if (str_list[i] === 'r') return str_list.slice(i + 1);
//     }
//     return [];
// }