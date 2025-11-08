//creating softcopy of an array
let trees = ['neemtree', 'oaktree', 'banyantree', 'mangotree']

let softcopy = trees;
trees.pop()
console.log(trees)
console.log(softcopy)

//creating hardcopy of that array

let a = ['apple', 'banana', 'goa', 'mango']

let b= [...a]

// ... -> spread operator/rest operator
a.pop()
console.log(a)
console.log(b)

//merge two arrays of popular cities and fav cities

var popularCities  = ['Hyd', 'Vij', 'BZA']

var favCities = ['Mubari', 'delhi']

console.log(popularCities.concat(favCities))


let countdown=[]
let j=5;
while(j>0) {
    countdown.push(j);
    j--
}
console.log(countdown)