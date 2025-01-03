import { useState } from "react";
import { calculatorButtons } from "../calculator-base-button-data";

function Calculator() {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput(input + value);
    if (input.includes(Number)) {
      setInput("");
    }
    console.log(value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleResult = () => {
    setInput("");
    if (input.length === 9) {
      setInput("Error");
    } else {
      if (
        input === null ||
        input === "Infinity" ||
        input === "NaN" ||
        input === SyntaxError ||
        input === undefined
      ) {
        setInput("Error");
      }
      setInput(eval(input));
    }
    console.log(eval(input));
    return eval(input);
  };

  // const handleResult = () => setInput((eval(input)));

  return (
    <>
      <main>
        <section className="calculator">
          <div className="flex_container button_container">
            <div className="display">{input}</div>
            <button
              className="button all_clear_key"
              type="button"
              value={calculatorButtons.value}
              onClick={handleClear}
            >
              AC
            </button>

            <button
              className="button clear_key"
              type="button"
              value={calculatorButtons.value}
              onClick={handleClear}
            >
              C
            </button>

            <button
              className="button number_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput(7)}
            >
              7
            </button>

            <button
              className="button number_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput(8)}
            >
              8
            </button>

            <button
              className="button number_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput(9)}
            >
              9
            </button>

            <button
              className="button operator_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput("/")}
            >
              /
            </button>

            <button
              className="button number_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput(4)}
            >
              4
            </button>

            <button
              className="button number_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput(5)}
            >
              5
            </button>

            <button
              className="button number_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput(6)}
            >
              6
            </button>

            <button
              className="button operator_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput("*")}
            >
              *
            </button>

            <button
              className="button number_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput(1)}
            >
              1
            </button>

            <button
              className="button number_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput(2)}
            >
              2
            </button>

            <button
              className="button number_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput(3)}
            >
              3
            </button>

            <button
              className="button operator_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput("-")}
            >
              -
            </button>

            <button
              className="button number_key zero_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput(0)}
            >
              0
            </button>

            <button
              className="button number_key decimal_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput(".")}
            >
              .
            </button>

            <button
              className="button result_key"
              type="button"
              value={calculatorButtons.value}
              onClick={handleResult}
            >
              =
            </button>

            <button
              className="button operator_key"
              type="button"
              value={calculatorButtons.value}
              onClick={() => handleInput("+")}
            >
              +
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Calculator;
