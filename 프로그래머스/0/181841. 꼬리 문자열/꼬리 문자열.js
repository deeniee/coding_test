function solution(str_list, ex) {
    var answer = '';
    return str_list.filter(item=>!item.includes(ex)).join('');
}