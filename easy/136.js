var singleNumber = function(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++){
        res += nums[i];
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i]==nums[j]) {
            res = res - nums[j]*2;
             }
        }        
    }
    return res;
};
    