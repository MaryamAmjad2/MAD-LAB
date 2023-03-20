// lab Task: Write a JS function which takes array of 10 number and returns 
// SUM,
// Sum of even
// Sum of ODD
// product of number


let arr=[1,2,3,4,5,6,7,8,9,10]
//SUM
let sum=arr.reduce(sumOFALL)
function sumOFALL(p,c){
    return p+c
}

//Even Array
let evenArray=arr.filter(even)
function even(x){
    if (x%2==0){
        return x
    }
}

//Sum of Even
let SumOFEven=evenArray.reduce(sumOFALL)

//odd Number
let oddArry=arr.filter(odd)
function odd(x){
    if (x%2!=0){
        return x
    }
}


//product
let pro=arr.reduce(productOfAll)
function productOfAll(p,c){
return p*c
}
console.log(sum)
console.log(evenArray)
console.log(SumOFEven)
console.log(oddArry)
console.log(pro)

