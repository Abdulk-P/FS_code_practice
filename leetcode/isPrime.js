class Solution{
    isPrime(n){
        for(let i=2; i<n; i++){
            if(n%i==0) return false;
        }

        return true;
    }
}

const sol = new Solution();
console.log(sol.isPrime(8));
