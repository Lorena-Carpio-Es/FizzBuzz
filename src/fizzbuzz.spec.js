import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("Generar el mismo numero si no sigue ninguna regla ", () => {
      expect(generarFizzBuzz(1)).toEqual("1");
    });

    it("Generar el mismo numero para cualquier numero si no sigue ninguna regla ", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
      });
});