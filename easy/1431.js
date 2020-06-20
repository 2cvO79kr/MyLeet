var kidsWithCandies = function(candies, extraCandies) {
    let res = [];
    let max = 0;
    for (let i = 0; i < candies.length; i++){
        max = Math.max(max, candies[i]);
    }
    for (let i = 0; i < candies.length; i++){
        res.push(candies[i] + extraCandies >= max);
    }
    return res;
};