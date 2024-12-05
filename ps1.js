let arr = [1,212,124,12,14,-7,-8,-78,-32,21,0];
let result = [];
let count =0;
let sum = 0;
function sumNegativeCountPositive(arr){
    for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        count++
    }else if(arr[i]<0){
        sum = sum + arr[i];
    }
}
result.push(count)
result.push(sum)
return result;
}

console.log(sumNegativeCountPositive(arr))


//  Question:
//  Write a JavaScript function that takes
//  an array of integers. The function should
//  count the number of positive numbers
//  and calculate the sum of the negative
//  numbers in the array. It should return
//  an array where:

//  The first element is the count
//  of positive numbers.
//  The second element is the sum
//  of negative numbers.
