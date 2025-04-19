var reverse = function(x) {
    let lastdigit = 0;
    let n = x;
    let rev = 0;
    while(n !== 0){
        lastdigit = n%10;
        n = Math.trunc(n/10);
        rev = (rev*10) + lastdigit;

         if (rev > 2147483647 || rev < -2147483648) {
            return 0;
        }
    }
    return rev;
};

console.log(reverse(-123));
