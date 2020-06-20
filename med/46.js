var permute = function(nums) {
    let res = [[nums[0]]];
    for (let step = 1; step < nums.length; step++){


        for (let i = 0; i < nums[0].length; i++ ){
            for (let u = 0; u < step+1; u++){
                res[i].splice(u,0,nums[step]);
            }
        }


    }




    return res;
};

function fac(a){
    if (a == 0) return 1;
    return fac(a-1)*a;
}


var permute = function(nums) {
    let res = [];
    for (let k = 0; k < fac(nums.length); k++){
        res.push([]);
    }
    for (let step = 0; step < nums.length; step++){
        for (let j = 0; j < fac(nums.length)/(step+1); j++){
            let u = 0;
            for (let i = j*(step+1); i < (step + 1)*(j + 1); i++){
             res[i].splice(u,0,nums[step]);
            u++;
            }
                
        }
    }
    return res;
};

function fac(a){
    if (a == 0) return 1;
    return fac(a-1)*a;
}



//создаем массив массивов
//создаем массив с первым элементом, кладем этот массив в массив массивов
//[1] 