var queensAttacktheKing = function(queens, king) {
    let temp = king
    let res = []
    let x = king[0]
    let y = king[1]
    up(x, y, queens, temp, res)
    temp = king
    console.log('aaaa', x, y, temp)
    down(x, y, queens, temp, res)
    temp = king
    console.log('bbbb', x, y, temp)
    left(x, y, queens, temp, res)
    temp = king
    console.log('ccc', x, y, temp)
    right(x, y, queens, temp, res)
    temp = king
    console.log('dddd', x, y, temp)
    upLeft(x, y, queens, temp, res)
    temp = king
    console.log('eeee', x, y, temp)
    upRight(x, y, queens, temp, res)
    temp = king
    console.log('gggg', x, y, temp)
    downLeft(x, y, queens, temp, res)
    temp = king
    console.log('hhhhh', x, y, temp)
    downRight(x, y, queens, temp, res)
    return res
};


function up(x, y, queens, temp, res){
    if (y < 0) return
    if (queens.includes(temp)){
        res.push(temp)
        return 
    } else {
        temp[1] -= 1
        up(x, y-1, queens, temp, res)
    }
}

function down(x, y, queens, temp, res){
    if (y >= 8) return
    if (queens.includes(temp)){
        res.push(temp)
        return 
    } else {
        temp[1] += 1
        down(x, y+1, queens, temp, res)
    }
}

function left(x, y, queens, temp, res){
    if (x < 0) return
    if (queens.includes(temp)){
        res.push(temp)
        return 
    } else {
        temp[0] -= 1
        left(x-1, y, queens, temp, res)
    }
}

function right(x, y, queens, temp, res){
    if (x >= 8) return
    if (queens.includes(temp)){
        res.push(temp)
        return 
    } else {
        temp[0] += 1
        right(x+1, y, queens, temp, res)
    }
}

function downRight(x, y, queens, temp, res){
    if (x >= 8 || y >= 8) return
    if (queens.includes(temp)){
        res.push(temp)
        return 
    } else {
        temp[0] += 1
        temp[1] += 1
        downRight(x+1, y+1, queens, temp, res)
    }
}

function downLeft(x, y, queens, temp, res){
    if (x < 0 || y >= 8) return
    if (queens.includes(temp)){
        res.push(temp)
        return 
    } else {
        temp[0] -= 1
        temp[1] += 1
        downLeft(x-1, y+1, queens, temp, res)
    }
}

function upRight(x, y, queens, temp, res){
    if (x >= 8 || y < 0) return
    if (queens.includes(temp)){
        res.push(temp)
        return 
    } else {
        temp[0] += 1
        temp[1] -= 1
        upRight(x+1, y-1, queens, temp, res)
    }
}

function upLeft(x, y, queens, temp, res){
    if ( x < 0 || y < 0 ) return
    if (queens.includes(temp)){
        res.push(temp)
        return 
    } else {
        temp[0] -= 1
        temp[1] -= 1
        upLeft(x-1, y-1, queens, temp, res)
    }
}

