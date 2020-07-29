//Objective is to add '1' to a number represented by an array

let digits = [1,0,9]


//O(n) solution that starts at the back of the array, and if a non-nine
//is encountered, we increment it and return the array. Otherwise, we 
//make all 9's into 0's until a non-nine is reached, at which we return the array.
//If we reach the front of the array without returning it, we add a one to the front.

for (let i = digits.length - 1; i >= 0; i--) {
    //Stop iteration early at non-nine value
    if (digits[i] != 9) {
        digits[i]++
        return digits
    } else {
        digits[i] = 0
    }
}

//We've reached the front, and need to add a '1' as a carry
digits.unshift(1)
return digits