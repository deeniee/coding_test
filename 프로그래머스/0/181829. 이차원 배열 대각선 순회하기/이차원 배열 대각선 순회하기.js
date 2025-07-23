function solution(board, k) {
    var sum = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (i+j <= k) {
                sum+= board[i][j]
            }
        }
    }
    return sum;
}