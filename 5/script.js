const parole = ['ciao', 'mondo', 'ciao', 'javascript'];

console.log(parole.filter((a,b)=>!parole.slice(b+1).includes(a)))
