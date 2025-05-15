function solution(my_string) {
    const numArray = my_string.split(/[a-zA-Z]/g).filter(Boolean);
    const sum = numArray.reduce((acc,cur) => acc + Number(cur), 0);
    return sum;
}