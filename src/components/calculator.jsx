import { useState } from "react";
import { calculatorButtons } from "../calculator-bonus-03-button-data";

function Calculator() {
  const [input, setInput] = useState("");

  const handleSwitch = () => {
    if (input.startsWith("-")) {
      setInput(input.slice(1));
    } else {
      setInput("-" + input);
    }
  };

  const handlePercent = () => {
    setInput(String(input / 100));
  };

  const handleInput = (value) => {
    setInput(input + value);
    if (typeof input !== "string") {
      setInput("");
    }
    console.log(value);
  };

  const handleAllClear = () => {
    setInput("");
  };

  const handleClear = () => {
    setInput(input.slice(0, -1));
  };

  const handleResult = () => {
 
    try {
      const result = eval(input);
      console.log(result);
      if (result === "Infinity" || result === undefined || result === Number.isNaN(result)) {
        console.log(input);
        setInput("");
        // add alert
        alert("Error Not a Number");
      } else {
        // things worked properly
        setInput(String(eval(input)));
      }
    } catch {
      setInput("");
      // add alert
      alert("Error");
    }
  };

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
              onClick={handleAllClear}
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
              className="button percent_key"
              type="button"
              onClick={handlePercent}
            >
              %
            </button>

            <button
              className="button switch_key"
              type="button"
              onClick={handleSwitch}
            >
              +/-
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
