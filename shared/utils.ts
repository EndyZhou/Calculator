export const getSuffixExpression = (pattern: string) => {
  const tokens = pattern.split(/([/*+-])/).filter((token) => token);
  const op_level = {
    "-": 1,
    "+": 1,
    "*": 2,
    "/": 2,
  };
  const opNumbers: (number | string)[] = [];
  const operators: string[] = [];

  const getOperatorLevel = (top, cur) => {
    return op_level[top] >= op_level[cur];
  };
  tokens.forEach((item) => {
    if (/[\d]$/.test(item)) {
      opNumbers.push(Number(item));
    } else if (/\+|\-|\*|\/$/.test(item)) {
      while (
        operators.length &&
        getOperatorLevel(operators[operators.length - 1], item) &&
        operators[operators.length - 1] !== "("
      ) {
        opNumbers.push(operators.pop()!);
      }
      operators.push(item);
    } else if (")" === item) {
      let opItem;
      while ((opItem = operators.pop()) !== "(") {
        opNumbers.push(opItem);
      }
    } else {
      operators.push(item);
    }
  });
  while (operators.length) {
    opNumbers.push(operators.pop()!);
  }
  const calc = (tokens: any[]) => {
    const result: number[] = [];
    const operatorCalcFunc = {
      "-": (num1, num2) => num1 - num2,
      "+": (num1, num2) => num1 + num2,
      "*": (num1, num2) => num1 * num2,
      "/": (num1, num2) => num1 / num2,
    };
    for (const token of tokens) {
      if (token in operatorCalcFunc) {
        const right = result.pop();
        const left = result.pop();
        if (left === undefined && right) {
          result.push(right);
        } else {
          result.push(operatorCalcFunc[token](left, right));
        }
      } else {
        result.push(token);
      }
    }
    return result.pop() || 0;
  };
  return calc(opNumbers);
};

export const removeEndDecimal = (currentNumber: string) => {
  if (isOperatorOrDecimal(currentNumber)) {
    currentNumber = currentNumber.slice(0, currentNumber.length - 1);
  }
  return currentNumber;
};

const OP_DECIMAL_REG = /^\d.*?[./*+-]$/;
export const isOperatorOrDecimal = (token: string) => {
  return OP_DECIMAL_REG.test(token);
};
