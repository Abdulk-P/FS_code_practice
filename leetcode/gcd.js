let result = function(x,y){
    let max=0;
    if(x>y)  max = x;
    else max=y;

    let gcd=0;
    for(let i=1; i<=max; i++){
        if(x%i==0 && y%i==0){
            gcd = i;
        }
    }
    return gcd;
}

console.log(result(9,12));


let nums = [1,2,3,4,5];

console.log(Math.max(...nums));
console.log(Math.min(...nums));

