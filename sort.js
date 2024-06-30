L = [6,7,4,10,3,8,1,9,5,2]

for(let i=0; i<L.length; i++) {
    for(let j=0; j<L.length; j++) {
        if(L[i] < L[j]) {
            let temp = L[i]
            L[i] = L[j]
            L[j] = temp
        }
    }
}
console.log('Loop',L)

function comp(a,b) {
    return a - b
}
L.sort(comp)
console.log('Function',L)

//convert to arrow function
L.sort((a,b) => b-a)
console.log('Arrow',L)

//or use reverse
L.sort().reverse()
console.log('Reverse',L)