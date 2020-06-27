var maximumProduct = function(nums) { //наибольшее произведение трех
    nums.sort((a,b) => a - b);  //сортируем массив по возрастанию
    let mul = 1;        
    let count = 0;   //счетчик множителей
    let left = 0;
    let right = nums.length-1
    while (count !== 2){
        if (count == 1){                        //выбираем наибольшее произведение из пар крайних чисел
            return mul *= Math.max(nums[left]*nums[left+1],nums[right-1] * nums[right-2]);
        }
        if (nums[right] > 0){                   //если правое число больше нуля, то включаем его в произведение
            mul *= nums[right];
            count++;
        } else 
            {               //если правое число отрицательное или равно нулю => то произведение тройки правых является наибольшим, 
            return mul = nums[right] * nums[right-1] * nums[right-2];   
        }
    }
};