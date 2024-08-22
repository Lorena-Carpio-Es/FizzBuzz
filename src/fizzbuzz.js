function generarFizzBuzz(numero) {
    if (numero % 15 ===0){
        return "Fizz";
    }
    if (numero % 3 === 0) {
        return "Fizz";
    }
    return numero+""
  }
  
  export default generarFizzBuzz;