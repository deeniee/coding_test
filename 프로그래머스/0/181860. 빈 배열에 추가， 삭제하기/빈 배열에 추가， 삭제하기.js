function solution(arr, flag) {
    var arrX = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (flag[i]) {
            for (let j = 0; j < arr[i] * 2; j++) {
                arrX.push(arr[i]);
            }
        } else {
            arrX.splice(-arr[i], arr[i])
        }
    }
    return arrX;
}