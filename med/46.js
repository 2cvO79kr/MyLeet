var permute = function(nums) {
    let res = [];
    let temp = [];
    let used = [];                              //показывает true/false в зависимости от заполнения temp
    used.length = nums.length;
    Array(used).fill(false);
    backTr(used, nums, temp, res);
    return res;
};

function backTr(used, nums, temp, res){
    if (temp.length == nums.length) {
        let sub = temp.slice();                         //копируем содержимое временного массива
        res.push(sub);                                     //записываем в результирующий
        console.log('Pushing ready array:', temp);
        return;
    }

    for (let i = 0; i < nums.length; i++){
        
        if (used[i] == true) continue;                          //если i-ый заполнен
        console.log('push to temp val', nums[i])
        temp.push(nums[i]);                                     //иначе записываем значение в массив
        console.log(temp);
        console.log('marking true', nums[i])
        used[i] = true;                                         //отмечаем заполненость i-ого 
        console.log(used)
        backTr(used, nums, temp, res);                          //вызываем рекурсию
        console.log('delete val', nums[i])
        temp.pop();                                             //после заполнения извлекаем значение и отмечаем i-ый как незаполненый
        console.log(temp)
        console.log('marking false', nums[i], i)
        used[i] = false;                                        //при завершении цикла i++, позволяет менять числа при возвращении на предыдущий уровень рекурсии
        
    }
}