var reverseString = function(s) {
    let l = s.length;
    for (let i = 0; i < l/2; i++){
        let b = s[i];
        let e = s[l - i - 1];
        s[i] = e;
        s[l - i - 1] = b;
    }
    return s;
};

// s.reverse(); быстрее