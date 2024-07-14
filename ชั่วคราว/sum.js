L = [1,2,3,4,5,6,7,8,9,10]

let sum = 0
for(let i=0; i < L.length; i++) {
    sum += L[i]
}

console.log('Loop',sum)

//normalfunction
function add (a,b) {
    return a + b
}

sum = L.reduce(add)
console.log('Reducer', sum)

//arrow (annonymous) function
sum = L.reduce((a,b) => a+b)
console.log('Arrow',sum)

//modify reduce to find multiplication of all elements
multi = 0
function mu (c,d) {
    return c * d
}
multi = L.reduce(mu)
console.log('Multiplication',multi)

