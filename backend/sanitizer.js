/*
Esta es mi propio módulo "desinfectante" (traducido del inglés "sanitizer") de variables.
Tomé algunos datos de referencia de los siguientes enlaces:

https://stackoverflow.com/questions/46718772/how-i-can-sanitize-my-input-values-in-node-js
https://www.mtu.edu/umc/services/websites/writing/characters-avoid/
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
*/
function validateIsTextOnlyAndHasNoSymbols(allegedText) {
  return (
    typeof allegedText === "string" &&
    allegedText.length > 0 &&
    allegedText !== null &&
    allegedText !== undefined &&
    allegedText.includes("#") == false &&
    allegedText.includes("%") == false &&
    allegedText.includes("&") == false &&
    allegedText.includes("{") == false &&
    allegedText.includes("}") == false &&
    allegedText.includes("\\") == false &&
    allegedText.includes("<") == false &&
    allegedText.includes(">") == false &&
    allegedText.includes("*") == false &&
    allegedText.includes("?") == false &&
    allegedText.includes("/") == false &&
    allegedText.includes("$") == false &&
    allegedText.includes("!") == false &&
    allegedText.includes("'") == false &&
    allegedText.includes('"') == false &&
    allegedText.includes(":") == false &&
    allegedText.includes("@") == false &&
    allegedText.includes("+") == false &&
    allegedText.includes("`") == false &&
    allegedText.includes("=") == false
  );
}

function validateIsBoolean(allegedBoolean) {
  return (
    typeof allegedBoolean === "boolean" ||
    (typeof allegedBoolean === "string" &&
      (allegedBoolean.toUpperCase() === "TRUE" ||
        allegedBoolean.toUpperCase() === "FALSE"))
  );
}

function validateIsInteger(allegedNumber) {
  return (
    (typeof allegedNumber === "number" ||
      (typeof allegedNumber === "string" &&
        isNaN(parseInt(allegedNumber)) === false)) &&
    (allegedNumber % 1 === 0 ? true : false)
  );
}

module.exports = {
  validateIsTextOnlyAndHasNoSymbols,
  validateIsBoolean,
  validateIsInteger,
};
