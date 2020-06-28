var combinationSum = function(candidates, target) {
    let res = [];
    let temp = [];
    let count = 0;                      //индекс
    abc(candidates, target, res, temp, count);
    return res;
};




function abc(candidates, target, res, temp, count){
    if (target == 0) {              //при нахождении нужной комбинации, в разнице с целью дующие 0, записываем в результирующий массив
        let sub = temp.slice();
        res.push(sub);
        return;
    } else if (target < 0) return;
    
    while(count < candidates.length){       
        temp.push(candidates[count]);       //записываем значение во временный массив
        abc(candidates, target - candidates[count], res, temp, count);//рекурсия с вычетом значения из цели
        temp.pop(); //извлечение последнего добавленногго значения 
        count++; //переход к следующему элементу 
    }
}


//не используем цикл for так как в рекурсии мы постоянно обновляем просматриваемого элемента i = 0, 
//который в последствии добавляет дублированные варианты комбинаций

//count аналог i не обновляется с вызовом рекурсии в цикле while, только после её выполнения