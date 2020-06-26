var isPowerOfThree = function(n) {  //степень трёх
    while(n > 3){
        n/=3;              
    }
    return n==3;
};
console.log(isPowerOfThree(27));