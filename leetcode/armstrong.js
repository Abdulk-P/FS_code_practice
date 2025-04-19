function armStrong(N){
    let sum =0;
    let num = N;
    // let revNum = 0;
    while(num !== 0){
        let ld = num%10;
        sum = sum+(ld*ld*ld);
        num = Math.floor(num/10);

    }

    return sum === N;
}

console.log(armStrong(153));
