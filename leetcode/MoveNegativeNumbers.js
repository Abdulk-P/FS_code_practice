// function movingNegNum(arr) {
//     let j =0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<0){
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             j++
//         }
//     }
//     return arr.join(" ");
// }

// const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
// console.log(movingNegNum(arr));


var createCounter = function(n) {
    let num = n;
    return function() {cd
        num++;
        return num;
        
    };
};

const counter = createCounter(-2)
console.log(counter()) // 10
counter() // 11
counter() // 12
counter() // 12
counter() // 12

