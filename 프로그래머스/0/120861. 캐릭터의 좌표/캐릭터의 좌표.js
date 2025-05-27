function solution(keyinput, board) {
    let x = 0;
    let y = 0;

    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);

    keyinput.forEach(key => {
        if (key === 'left') x--;
        else if (key === 'right') x++;
        else if (key === 'up') y++;
        else if (key === 'down') y--;
        
        x = Math.max(-maxX, Math.min(maxX, x));
        y = Math.max(-maxY, Math.min(maxY, y));
    });

    return [x, y];
}