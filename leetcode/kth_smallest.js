class Solution {
    kthSmallest(arr, k) {
        // code here
        let temp =0;
        let n = arr.length;
        
        for(let i=0; i<arr.length; i++){
            for(let j=0; j<n-i-1; j++){
                if(arr[j]>arr[j+1]){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
            
        }
        return arr;
    }
}

let sol = new Solution();
let arr = [7,10,4,3,20,15];
let res = sol.kthSmallest(arr, 3);
console.log(res);
