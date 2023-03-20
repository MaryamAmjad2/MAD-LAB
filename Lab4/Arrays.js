let a=[1,2,3,4,5,6,7,8,"Hello"]
//push 
a.push("World")
console.log(a)
//pop 
a.pop()
a.pop()
console.log(a)

//shift
a.shift()
console.log(a)
a.unshift(1000)
console.log(a)
console.log(typeof a[2])

//filter
let fil=a.filter(lessThan5) 
function lessThan5(x){
    if(x<5){
        return x
    }

}
console.log(fil)

//reduce
let rd=a.reduce(sum)
function sum(p,c){
    return p+c
}
console.log(rd)


//map 
let mp=a.map(mulyiply2=x=>x*2)
console.log(mp)

//Sort
//desending 
let de=a.sort(a,b)



