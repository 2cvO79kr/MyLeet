var reverseString = function(s) {
    let l = s.length;
    for (let i = 0; i < l/2; i++){                  //выполняем цикл, пока не дойдем до середины
        let b = s[i];                           //запоминаем первый символ
        let e = s[l - i - 1];                   //запоминаем последний символ
        s[i] = e;                                  //перезаписываем эти символы
        s[l - i - 1] = b;
    }
    return s;
};

// s.reverse(); быстрее