function solution(food) {
    let order1 = [];
    let order2 = [];
 
    for(let i = 1; i <= food.length; i++) {
        if (food[i] > 1) {
            let num = Math.floor(food[i]/2);
            for(let j = 0; j < num; j++) {
                order1.unshift(i);
                order2.push(i);
            }
        }
    }
    return [...order2, 0, ...order1].join('');
}