let arr=[3, -1, 7, 10, -2, 5]

console.log((arr.filter((a)=>a>=0).reduce((a,b)=>a+b,0))/arr.filter((a)=>a>=0).length)