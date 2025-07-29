function solution(phone_number) {
    let lastNums = phone_number.slice(phone_number.length-4);
    let protectedNums = new Array(phone_number.length-4).fill('*').join('')
    return protectedNums+lastNums;
}