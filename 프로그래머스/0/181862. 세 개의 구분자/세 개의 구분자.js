function solution(myStr) {
    let result = myStr.split(/[abc]/).filter(v=>v.length > 0)
    return result.length === 0 ? ["EMPTY"] : result;
}