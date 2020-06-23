var generate = function(numRows) {      //треугольник Паскаля
    let arrs = [];
    for (let i = 0; i < numRows; i++){
        let subarr = [];
        if (i == 0) {               //заполнение первой строки 1
            subarr.push(1);
            arrs.push(subarr);
            continue;
        }
        if (i == 1) {                  //заполнение второй строки 1, 1
            subarr.push(1);
            subarr.push(1);
            arrs.push(subarr);
            continue
        }
        for (let j = 0; j < i + 1; j++){
            if (j == 0 || j == i) {         //заполение крайних элементов 1
                subarr.push(1);
            } else {
                subarr.push(arrs[i-1][j-1] + arrs[i-1][j]);     //запись суммы значений верхних соседних ящеек
            }
        }
        arrs.push(subarr);     // запись результата в результирующий массив
    }
    return arrs;
};