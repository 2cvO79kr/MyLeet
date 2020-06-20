var uniquePaths = function(m, n) {
    let res = [];
    for(let i = 0; i < m; i++){
        let subarr = [];
        for (let j = 0; j < n; j++){
            if (i==0 || j==0){
                subarr.push(1); 
            } else {
                subarr.push(subarr[j-1] + res[i-1][j]);
            }
        }
        res.push(subarr);
    }
    return res[m-1][n-1];
    };