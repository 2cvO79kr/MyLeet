var lengthOfLongestSubstring = function(s) {
    let a = '';
    let res = '';
    for (let i=0; i < s.length; i++){
        if (!a.includes(s[i])) {
            a = a + s[i];
        } else {
            if (a.indexOf(s[i]) < res.length){
                a = a.slice(a.indexOf(s[i])+1) + s[i];
            } else {
                if (a.length > res.length){
                    res = a;  
                }
                a =s[i];
            }
        }
        if (a.length > res.length){
            res = a;   
        }
    }
    return res.length;
};