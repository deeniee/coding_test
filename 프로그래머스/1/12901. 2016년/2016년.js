function solution(a, b) {
    const dayNames = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const dayInMonth = [31,29,31,30,31,30,31,31,30,31,30,31];
    let baseDay = 5;
    let totalDays = 0;
    
        for(let i = 0; i < a-1; i++) {
            totalDays+=dayInMonth[i];
        }
    
    totalDays += (b - 1);
    let dayOfWeek = (baseDay + totalDays) % 7;
    
    return dayNames[dayOfWeek];
}