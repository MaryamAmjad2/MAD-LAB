let nam=[" Maryam "," Sofia "," Misbah "]
console.log(nam)
nm2=nam.map(cleanNames)
function cleanNames(x){
    return x.trim()
}
console.log(nm2)

// nm3=nam.map(cl=x=>x.toUpperCase())
// console.log(nm3)