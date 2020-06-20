var minPathSum = function(grid) {
    let l = grid[0].length;
    let h = grid.length;
    for (let n = 1; n < h; n++){
        grid[n][0]=grid[n-1][0] + grid[n][0];
        
    }  
    for (let m = 1; m < l; m++){
        grid[0][m]=grid[0][m-1] + grid[0][m];
    }
    for (n = 1; n < h; n++){
        for (m = 1; m < l; m++){
            grid[n][m]=grid[n][m] + Math.min(grid[n - 1][m],grid[n][m - 1]);     
        }
    }    
return grid[h - 1][l - 1];
};