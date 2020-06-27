var kidsWithCandies = function(candies, extraCandies) {//возможно ли увеличить значение на exstra до максимального значения массива
    let res = [];
    let max = 0;
    for (let i = 0; i < candies.length; i++){   //поиск максимального значения
        max = Math.max(max, candies[i]);
    }
    for (let i = 0; i < candies.length; i++){
        res.push(candies[i] + extraCandies >= max); //запись сравнения максимального значения и суммы текущего с exstra
    }
    return res;
};