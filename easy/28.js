var strStr = function(haystack, needle) {
    let i = 0;
    let j = 0;
    if (needle == "") return res = 0;
    if (haystack.includes(needle)) {
        for (i = 0; i < haystack.length; i++) {console.log(i,j, haystack[i], needle[j])
           
            if (haystack[i]==needle[j]){
                j++
            } else {
                i = i - j;
                j = 0;
            }
            if (j==needle.length) break;
    }
    return i-j+1;
    } else return -1;
};