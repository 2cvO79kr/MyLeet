var isPowerOfThree = function(n) {
    while(n > 3){
        n/=3;
    }
    return n==3;
};
console.log(isPowerOfThree(27));