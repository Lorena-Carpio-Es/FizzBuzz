import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("Generar el mismo numero si no sigue ninguna regla ", () => {
      expect(generarFizzBuzz(1)).toEqual("1");
    });

    it("Generar el mismo numero para cualquier numero si no sigue ninguna regla ", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
    });

     it("Generar el fizz para el 3 ", () => {
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });

    it("Generar Fizz para cualquier múltiplo de 3", () => {
        expect(generarFizzBuzz(6)).toEqual("Fizz");
        expect(generarFizzBuzz(9)).toEqual("Fizz");
        expect(generarFizzBuzz(12)).toEqual("Fizz");
    });

    it("Generar Fizz para cualquier múltiplo de 15", () => {
        expect(generarFizzBuzz(30)).toEqual("Fizz");
        expect(generarFizzBuzz(45)).toEqual("Fizz");
        expect(generarFizzBuzz(60)).toEqual("Fizz");
    });

    

});