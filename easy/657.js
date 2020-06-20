var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;
    let i = 0;
    while (i != moves.length){
        if (moves[i] == 'U') y++;
        if (moves[i] == 'D') y--;
        if (moves[i] == 'L') x--;
        if (moves[i] == 'R') x++;
        i++;        
    }
    return (x == 0 && y == 0);
};