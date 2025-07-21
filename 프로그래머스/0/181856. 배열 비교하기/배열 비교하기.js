function solution(arr1, arr2) {
    let size1 = arr1.length;
    let size2 = arr2.length;
    let sum1 = arr1.reduce((a,b) => a + b, 0);
    let sum2 = arr2.reduce((a,b) => a + b, 0);

    return size1 < size2
        ? -1
        : size1 > size2
        ? 1
        : sum1 < sum2
        ? -1
        : sum1 > sum2
        ? 1
        : 0;
}
// 다른 사람 풀이
// const solution = (arr1, arr2) => {
//     return arr1.length !== arr2.length ? compare(arr1.length, arr2.length) : compare(arr1, arr2, "reduce");
// };

// const compare = (a, b, option) => {
//     if (option === "reduce") {
//         a = a.reduce((acc, cur) => acc + cur);
//         b = b.reduce((acc, cur) => acc + cur);
//     }
//     return a > b ? 1 : a < b ? -1 : 0;
// };