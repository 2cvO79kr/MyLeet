var plusOne = function(digits) {
    if (digits.length == 0){
        digits.push(1);
        return digits;
    }
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    for (let i = 0; i < digits.length ;i++){
    if (digits[digits.length - 1 - i] !== 10){
        return digits;
    } else {
        digits[digits.length - 1 - i] = 0;
        digits[digits.length - 2 - i] = digits[digits.length - 2 - i] + 1;
    }    
    }
    if (digits[0] == 0){
        digits.unshift(1);
        }
    return digits;
};