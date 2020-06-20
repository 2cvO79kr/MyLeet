var twoSum = function(nums, target) {
    let v = [];
       for (let i = 0; i < nums.length; i++) {
           let value = target - nums[i];
           if (nums.includes(value)) {
               for (let j = i + 1; j < nums.length; j++) {
                   if (value === nums[j]) {
                       v.unshift(i);
                       v.push(j);
                   }
               }
           }
       } 
      return v;  
    };