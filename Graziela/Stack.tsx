function parseBoolExpr(expression: string): boolean {
  const stack: string[] = [];

  for (const char of expression) {
    if (char === ",") continue;

    if (char !== ")") {
      stack.push(char);
    } else {
      const values: boolean[] = [];

      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        const val = stack.pop();
        values.push(val === "t");
      }

      stack.pop();
      const operator = stack.pop();

      let result: boolean;
      switch (operator) {
        case "!":
          result = !values[0];
          break;
        case "&":
          result = !values.includes(false);
          break;
        case "|":
          result = values.includes(true);
          break;
        default:
          result = false;
      }
      stack.push(result ? "t" : "f");
    }
  }
  return stack.pop() === "t";
}
