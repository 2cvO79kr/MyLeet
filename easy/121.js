var maxProfit = function(prices) {
    if (prices.length == 0 || prices.length == 1) return 0;
    let a = 0;
    let b = 1;
    let res = 0;
    while ( b != prices.length){
        if (prices[b] - prices[a] < 0){
            a = b;
        } else {
            res = Math.max(res, prices[b] - prices[a]);
            }
        b++;
    }
    return res;
};