var uniquePathsWithObstacles = function(obstacleGrid) {
    let arr = obstacleGrid;
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    if (arr[0][0] == 1) return 0;
    for (let i = 0; i < m; i++ ){
        for (let j = 0; j < n; j++){
          if ( i==0 && j ==0 ){
            arr[i][j] = 1;
            continue;
          }
          if ( i==0 && arr[i][j] == 0){
            arr[i][j] = arr[i][j] + arr[i][j-1];
            continue;
          }
          if ( i==0 && arr[i][j] == 1){
            arr[i][j] = 0;
            continue;
          }
          if ( j==0 && arr[i][j] == 0){
            arr[i][j] = arr[i-1][j] + arr[i][j];
            continue;
          }
          if ( j==0 && arr[i][j] == 1){
            arr[i][j] = 0;
            continue;
          }
          if ( i!==0 && j!==0 && arr[i][j] == 0){
            arr[i][j] = arr[i-1][j] + arr[i][j-1];
            continue;
          }
          if ( i!==0 && j!==0 && arr[i][j] == 1){
            arr[i][j] = 0;
            continue;
          }

        } 
    }
    return arr[m-1][n-1];
};