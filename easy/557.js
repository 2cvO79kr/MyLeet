var reverseWords = function(s) {
    let elems = s.split(' ');
   
    for (let i = 0; i < elems.length; i++){
        let smele = [];
        for (let j = elems[i].length - 1; j >= 0; j--){
            smele.push(elems[i][j]);
        }
        elems[i] = smele.join('');
    }
    return elems.join(' ');
};