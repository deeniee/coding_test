function solution(order) {
    const ame = 'americano';
    const lt = 'cafelatte';
    const any = 'anything';

    let price = []
    for(let o of order) {
        if (o.includes(ame)) {
            price.push(4500)
        } else if (o.includes(any)) {
            price.push(4500)
        } else if (o.includes(lt)) {
            price.push(5000)
        } 
    }
    return price.reduce((a,b)=>a+b);
}