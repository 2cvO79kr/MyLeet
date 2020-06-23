var twoSum = function(nums, target) {               //  nums - массив чисел, target - целевая сумма
    let v = [];
       for (let i = 0; i < nums.length; i++) {      // выбираем первое слагаемое 
           let value = target - nums[i];            
           if (nums.includes(value)) {
               for (let j = i + 1; j < nums.length; j++) {   // перебираем комбинации первого и вторых слагаемых
                   if (value === nums[j]) {                 // при соблюдении условия 
                       v.unshift(i);                       // записываем индексы слагаемых в результирующий массив
                       v.push(j);
                   }
               }
           }
       } 
      return v;  
    };