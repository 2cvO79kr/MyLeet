var generate = function(numRows) {
    let arrs = [];
    for (let i = 0; i < numRows; i++){
        let subarr = [];
        if (i == 0) {
            subarr.push(1);
            arrs.push(subarr);
            continue;
        }
        if (i == 1) {
            subarr.push(1);
            subarr.push(1);
            arrs.push(subarr);
            continue
        }
        for (let j = 0; j < i + 1; j++){
            if (j == 0 || j == i) {
                subarr.push(1);
            } else {
                subarr.push(arrs[i-1][j-1] + arrs[i-1][j]);
                console.log(arrs[i-1][j-1])
            }
        }
        arrs.push(subarr);
    }
    return arrs;
};