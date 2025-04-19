const ans = function(n){
    let arr = [];
    let sum = 0;
    for(let i=1; i<n; i++){
        if(n%i==0){
            arr.push(i);
        }
    }

    for(let x of arr){
        sum = sum+x;
    }

    return sum === n;
}

console.log(ans(7));
