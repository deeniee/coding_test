function solution(numbers) {
    var condidate = [];
    
     for (let i = 0; i < numbers.length; i++) {
         for (let j = i+1; j < numbers.length; j++) {
         condidate.push(numbers[i]*numbers[j]);
         }
     }
      
    return Math.max(...condidate);
}