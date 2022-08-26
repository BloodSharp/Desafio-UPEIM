const sanitizer = require("../sanitizer.js");

describe("Validación de datos de entrada", () => {
  test("Test que valida que los inputs sean válidos", () => {
    // Variables de prueba
    // Textos
    let textValue = "Hello World";
    let invalidTextValue = "HelloWorld'";
    // Númericos
    let numericValue = 1337;
    let numericStringTypeValue = "1337";
    let numericFloatValue = 1337.1337;
    let numericFloatStringTypeValue = "1337.1337";
    let invalidNumericStringTypeValue = "1337Agustín";
    // Booleanos
    let booleanValue = false;
    let booleanStringTypeValue = "trUe";
    let invalidBooleanStringTypeValue = "False1";
    // Incorrectos
    let nullValue = null;
    let undefinedValue = undefined;

    // Validar textos
    expect(sanitizer.validateIsTextOnlyAndHasNoSymbols(textValue)).toEqual(
      true
    );
    expect(
      sanitizer.validateIsTextOnlyAndHasNoSymbols(invalidTextValue)
    ).toEqual(false);

    // Validar números
    expect(sanitizer.validateIsInteger(numericValue)).toEqual(true);
    expect(sanitizer.validateIsInteger(numericStringTypeValue)).toEqual(true);
    expect(sanitizer.validateIsInteger(numericFloatValue)).toEqual(false);
    expect(sanitizer.validateIsInteger(numericFloatStringTypeValue)).toEqual(
      false
    );
    expect(sanitizer.validateIsInteger(invalidNumericStringTypeValue)).toEqual(
      false
    );

    // Validar booleanos
    expect(sanitizer.validateIsBoolean(booleanValue)).toEqual(true);
    expect(sanitizer.validateIsBoolean(booleanStringTypeValue)).toEqual(true);
    expect(sanitizer.validateIsBoolean(invalidBooleanStringTypeValue)).toEqual(
      false
    );

    // Validar nulos incorrectos
    expect(sanitizer.validateIsTextOnlyAndHasNoSymbols(nullValue)).toEqual(
      false
    );
    expect(sanitizer.validateIsInteger(nullValue)).toEqual(false);
    expect(sanitizer.validateIsBoolean(nullValue)).toEqual(false);

    // Validar undefined incorrectos
    expect(sanitizer.validateIsTextOnlyAndHasNoSymbols(undefinedValue)).toEqual(
      false
    );
    expect(sanitizer.validateIsInteger(undefinedValue)).toEqual(false);
    expect(sanitizer.validateIsBoolean(undefinedValue)).toEqual(false);
  });
});
