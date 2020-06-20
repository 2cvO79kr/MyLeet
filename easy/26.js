var removeDuplicates = function(nums) {
    let slow = 0;
    let fast = 0;
    if (nums.length ==0) return 0;
     for (fast = 0; fast < nums.length; fast++){
         if (nums[slow]!==nums[fast]){
             slow++;
             nums[slow] = nums[fast];
         }
     }
    return slow + 1;
};