var fourSum = function(nums, target) {
    let mas = [];
       let arr = [];
           nums.sort((a,b)=>a-b);
           sumN(0, mas, arr, nums, target);
           return mas;
   }
   
       
   function sumN( index, mas, arr, nums, targetSum){
       if (arr.length == 2){ 
           let left = index;
           let right = nums.length - 1;
           
           while (left < right){
                   let res = nums[left] + nums[right];
                       if (res === targetSum){
                       let subarr = arr.slice();
                           subarr.push(nums[left]);
                           subarr.push(nums[right]);
                           mas.push(subarr);
                           while (left < right && nums[left] == nums[left + 1]) {left++;}
                           while (left < right && nums[right] == nums[right - 1]){right--;}
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
               for (let i = index; i < nums.length - 2 ;i++){
                  
                   arr.push(nums[i]);
                   sumN(i + 1, mas, arr, nums, targetSum - nums[i]);
                   arr.pop();
                    while (i < nums.length && nums[i] == nums[i+1]) {
                    i++;
               }
           }
       }
   }