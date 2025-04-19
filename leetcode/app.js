class Solution {
    // Function to check whether the number evenly divides n.
    evenlyDivides(n) {
        // code here
        let count =0;
        
        let number = n;
        let lastdigit =0;
        while(number!=0){
            lastdigit = number%10;
            number = number/10;
            
            if(n%lastdigit == 0) count +=1;
        }
        return count;

    }
}


let s1 = new Solution();
console.log(s1.evenlyDivides(12));
