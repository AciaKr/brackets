module.exports = function check(str, bracketsConfig) {

    let bracketsPares = {};
    let openBrackets = [];
    for(i = 0; i < bracketsConfig.length; i++) {
      bracketsPares[bracketsConfig[i][1]] = bracketsConfig[i][0];
      openBrackets.push(bracketsConfig[i][0]);
    }

    let stack = [];

    for (let j = 0; j < str.length; j++) {
      let currentSymbol = str[j];
      let topElement = stack[stack.length - 1];
      if (openBrackets.includes(currentSymbol)) {
        if (stack.length === 0 || (bracketsPares[currentSymbol] !== currentSymbol) || (topElement !== currentSymbol && bracketsPares[currentSymbol] === currentSymbol)) {
          stack.push(currentSymbol);
        } else if (topElement === currentSymbol && bracketsPares[currentSymbol] === currentSymbol) {
          stack.pop();
        }
      } else {
        if (stack.length === 0) {
          return false;
        }
        if (bracketsPares[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
}

