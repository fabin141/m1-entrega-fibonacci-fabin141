function soma(num1,num2){
    return num1+num2
}
function fibonacci(sequencia){
    if(sequencia===1){
      return 1
    }
    let anterior = 0;
    let atual = 1;
    let resultado = 0;
    for(let i = 1; i < sequencia; i++){
      resultado = soma(anterior,atual);
      anterior = atual;
      atual = resultado;
    }
  return resultado;
  }




//Experiência dois;

const fib = (n) =>{
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for(let i = 0; i <= n; i++){
        table [i + 1] += table[i];
        table [i + 2] += table[i];
    }
    return table[n];
}
console.log(fib(73));