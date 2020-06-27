var judgeCircle = function(moves) {             //передвижение задается строкой
    let x = 0;                                      //начальные координаты
    let y = 0;
    let i = 0;                                      //счетчик ходов
    while (i != moves.length){                      
        if (moves[i] == 'U') y++;                   //устанавливаем зависимость изменения координаты от символа в строке
        if (moves[i] == 'D') y--;
        if (moves[i] == 'L') x--;
        if (moves[i] == 'R') x++;
        i++;        
    }
    return (x == 0 && y == 0);                      //если вернулись в исходную позицию - true
};