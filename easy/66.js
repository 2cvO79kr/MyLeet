var plusOne = function(digits) {       //добавление к комбинации чисел массива как *значному числу 1
    if (digits.length == 0){
        digits.push(1);             //если массив пустой, записываем в него 1
        return digits;
    }
    digits[digits.length - 1] = digits[digits.length - 1] + 1;          //добавляем к последнему елементу 1
    for (let i = 0; i < digits.length ;i++){                        
    if (digits[digits.length - 1 - i] !== 10){                      //если последний элемент не равен 10 выводим результат
        return digits;
    } else {
        digits[digits.length - 1 - i] = 0;                                      //иначе записываем в последний элемен массива 0
        digits[digits.length - 2 - i] = digits[digits.length - 2 - i] + 1;      //фиксируем изменение следующего разряда на 1
    }    
    }
    if (digits[0] == 0){         //если первый и не единственный элемент массива равен 0, дабавляем следующую разрядность (99 -> 00 -> 100)
        digits.unshift(1);
        }
    return digits;
};