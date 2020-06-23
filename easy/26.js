var removeDuplicates = function(nums) {             // извлечение дубликатов
    let slow = 0;                                   // устанавливаем быстрый и медленный укзатели
    let fast = 0;                                   // возврачаем 0  при пустом входном массиве
    if (nums.length ==0) return 0;
     for (fast = 0; fast < nums.length; fast++){
         if (nums[slow]!==nums[fast]){                 // при различных значениях передвигаем медленный ук. 
             slow++;                                    //записываем на новое место значение быстрого, 
             nums[slow] = nums[fast];
         }
     }
    return slow + 1;
};