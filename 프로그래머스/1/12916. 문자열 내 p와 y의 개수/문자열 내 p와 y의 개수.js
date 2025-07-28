function solution(s){
    let filterP = [...s].filter(v=>v==='p'||v==='P').length;
    let filterY = [...s].filter(v=>v==='y'||v==='Y').length;
    return filterP === filterY ? true : false;
}