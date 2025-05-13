function solution(n) {
    const str = String(n)
    const array = Array.from(str)
    const numArray = array.map(Number)
    
    let sum = 0
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i]
    }
    
    return sum
}