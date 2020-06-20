var numIslands = function(grid) {
    let count = 0    
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] == 1){
                count++
                dfs(j, i, grid)
            }
        } 
    }
    return count
};

function dfs(x, y, grid){
    if (x < 0 || x >= grid[0].length || y < 0 || y >= grid.length || grid[y][x] == 0) {
        return
    } else {
        grid[y][x] = 0
        dfs(x+1, y, grid)
        dfs(x, y+1, grid)
        dfs(x-1, y, grid)
        dfs(x, y-1, grid)
    }
}