var convert = function(s, numRows) {
    let res = '';
    let step = 2 * numRows - 2;
    if (numRows == 1) return s;
    for (let i = 0; i < numRows; i++){
        for (let j = 0; i + j < s.length; j+= step){
            res += s[i + j];
            if ( i != 0 && i != numRows - 1 && j + step - i < s.length){
                res += s[j + step - i];
            }
        }
    }
    return res;
};