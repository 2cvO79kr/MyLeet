var merge = function(nums1, m, nums2, n) {              // слияние массивов с указанными длиннами, массивы отсортированны
    if (n == 0) return nums1;
      while (n!==0){                            //слияние проводится с последних элементов
          if (nums1[m-1]>nums2[n-1]){           //записываем наибольший элемент в конец первого массива
              nums1[n + m - 1] = nums1[m-1];
              m--;
          } else {
              nums1[n + m - 1] = nums2[n-1];
              n--;
          }
      }
    return nums1;
    };
    
