let str="Maryam"
//concat with template literal
console.log(`Hello ${str}`)
//to show string on new line
console.log(`Hello \n ${str}`)
//to print backclash
console.log(`Hello \\${str}`)
//to pritn "
console.log(`Hello \" ${str}`)
//length of string
console.log("length is "+str.length)
//to access a character at a special index
console.log(str.charAt(2))
     //or
console.log(str[3])
//String comparison
console.log(str=="Maryam")
//concat with Function
let str2="Amjad"
str2=str.concat(" "+str2)
console.log(str2)
//Substring
let a="Practice of String Manuplation "
a=a.substring(3,7)
console.log(a)
//trim (removes extra space from start and end)
let e=" This is Javascript Practice "
console.log(e.trim())
console.log(e.trimStart())
console.log(e.trimEnd())

//UpperCase
e=e.toUpperCase()
console.log(e)
//LowerCase
e=e.toLowerCase()
console.log(e)


//replace 
e=e.replace("practice ","Test")
console.log(e)

//include
e=e.includes("Test")
console.log(e)

//padStart()

let text = "5";
let padded = text.padEnd(10,"0");
console.log(padded)

//String to Array
let g="1233444"
arr=Array.from(g)
console.log(arr)
    //Or
let h="1,2,3,34,44"
h=h.split(',')
console.log(h)



//        String Search Methods


//indexOf
let b="Hello My Name is Maryam"
console.log(b.indexOf("is"))
//LastIndexOf
let c=b.indexOf("am")
console.log(c)
let d=b.lastIndexOf("am")
console.log(d)
//search
let search="I Live in Pakistan"
let check=search.search("Pakistan")
console.log(search)
console.log(check)

//match
let mtch="It is Raining in Spain"
ch=mtch.match("ain")
console.log(ch)

//StartsWith
let st="Welcome to JavaScript"
let chk=st.startsWith("Welcome")
console.log(chk)


//Ends With
let chk2=st.endsWith("Script")
console.log(chk2)














