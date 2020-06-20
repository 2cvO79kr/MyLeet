var isValid = function(s) {
    let a = ['(', '[', '{'];
    let b = [')', ']', '}'];
    let stack = [];
    for (let i = 0; i < s.length; i++){
            if (a[0]==s[i]) {
                stack.push(b[0]);
            } else if (a[1]==s[i]) {
                stack.push(b[1]);
            } else if (a[2]==s[i]) {
                stack.push(b[2]);
            } else {
            let temp = stack.pop();
            if (temp!==s[i]) return false;
            }
    } 
    
    return stack.length == 0;
};