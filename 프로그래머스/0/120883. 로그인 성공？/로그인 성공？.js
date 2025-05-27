function solution(id_pw, db) {
    var answer = '';
    
    let id = id_pw[0]
    let pw = id_pw[1]
    
    for(let i = 0; i < db.length; i++) {
        let checkId = db[i][0]
        let checkPw = db[i][1]
        
        if ( checkId === id && checkPw === pw) answer = 'login'
        if ( checkId === id && checkPw !== pw) answer = 'wrong pw'
        if ( checkId !== id && checkPw !== pw) answer = 'fail'
    }
    return answer;
}