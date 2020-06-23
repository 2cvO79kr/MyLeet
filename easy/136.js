var singleNumber = function(nums) {     // поиск одиночного значения из пар
    let res = 0;
    for (let i = 0; i < nums.length; i++){
        res += nums[i];                     //записываем i-элемент
        for (let j = i + 1; j < nums.length; j++){          //ищем пару
            if (nums[i]==nums[j]) {   //при совпадении элементов
            res = res - nums[j]*2;          //вычитаем удвоенное значение для последующей пропуска дубликата
             }
        }        
    }
    return res;         //одиночное значение - остаток
};
    