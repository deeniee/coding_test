function solution(order) {
    var count = 0;
    const array = [...order.toString()]
    
    array.forEach((el)=> {
        if (Number(el) === 3 || Number(el) === 6 || Number(el) === 9) count++
    })
                                       
    return count;
}