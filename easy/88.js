var merge = function(nums1, m, nums2, n) {
    if (n == 0) return nums1;
      while (n!==0){
          if (nums1[m-1]>nums2[n-1]){
              nums1[n + m - 1] = nums1[m-1];
              m--;
          } else {
              nums1[n + m - 1] = nums2[n-1];
              n--;
          }
      }
    return nums1;
    };
    
