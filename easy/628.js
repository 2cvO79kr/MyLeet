var maximumProduct = function(nums) {
    nums.sort((a,b) => a - b);
    let mul = 1;
    let count = 0;
    let left = 0;
    let right = nums.length-1
    while (count !== 2){
        if (count == 1){
            return mul *= Math.max(nums[left]*nums[left+1],nums[right-1] * nums[right-2]);
        }
        if (nums[right] > 0){
            mul *= nums[right];
            count++;
        } else 
            {
            return mul = nums[right] * nums[right-1] * nums[right-2];
        }
    }
};