let arr=['ciao', 'mondo', 'sole', 'albero', 'mare'];
// console.log(arr.reduce((a,b)=>a+b.length**2))
console.log((arr.filter((a)=>a.length%2==0)).reduce((a,b)=>a+b.length**2,0))
// console.log(arr.reduce((acc, str) => 
// str.length % 2 === 0 ? acc + str.length ** 2 : acc, 0))