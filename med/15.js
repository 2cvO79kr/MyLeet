var threeSum = function(nums) {
    let mas = [];
    let arr = [];
    let targetSum = 0;          // указываем любую целевую сумму
        nums.sort((a,b)=>a-b); // сортируем nums
        sumN(0, mas, arr, nums, targetSum);
        return mas;
}
    
function sumN( index, mas, arr, nums, targetSum){
    if (arr.length == 1){                    // если осталось два места для заполнения в массиве (1 для суммы из трех, 2 для четырех и тд)
        let left = index;
        let right = nums.length - 1;
        
        while (left < right){                   // перебор посленей пары с помощью указателей
                let res = nums[left] + nums[right];
                    if (res === targetSum){
                    let subarr = arr.slice();
                        subarr.push(nums[left]);
                        subarr.push(nums[right]);
                        mas.push(subarr);
                        while (left < right && nums[left] == nums[left + 1]) {left++;}     // 22,23,41 строки пропускают дубли                        while (left < right && nums[right] == nums[right - 1]){right--;}
                         right--;
                         left++;
                    } else if (res > targetSum){
                        right--;
                    }
                    else {
                            left++;
                         }
           
                }
        } else {
            for (let i = index; i < nums.length - 2 ;i++){          //запись первого и последующих элементов в массив (кроме последней пары)
               
                arr.push(nums[i]);
                sumN(i + 1, mas, arr, nums, targetSum - nums[i]);
                arr.pop();
                 while (i < nums.length && nums[i] == nums[i+1]) {
                 i++;
            }
        }
    }
}