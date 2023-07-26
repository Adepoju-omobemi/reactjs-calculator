import React, { useState } from "react";

const Calculator = () => {
  const [screenValue, setScreenValue] = useState("0");

  const displayContent = (value) => {
    if (screenValue == "0") {
        setScreenValue(value);
    } else {
        setScreenValue((prevValue) => prevValue + value);
    }
  };

  const answer = () => {
    const result = eval(screenValue);
    setScreenValue(result);
  };

  const handleClear = () => {
    setScreenValue(" ");
  };

  return (
    <div className="calculator">
        
      <div className="display">{screenValue}</div>
   {/* creating buttons */}
      
      <div className="buttons">
        <button onClick={() => displayContent("7")}>77</button>
        <button onClick={() => displayContent("8")}>8</button>
        <button onClick={() => displayContent("9")}>9</button>
        <button onClick={() => displayContent("+")}>+</button>
        <button onClick={() => displayContent("4")}>4</button>
        <button onClick={() => displayContent("5")}>5</button>
        <button onClick={() => displayContent("6")}>6</button>
        <button onClick={() => displayContent("-")}>-</button>
        <button onClick={() => displayContent("1")}>1</button>
        <button onClick={() => displayContent("2")}>2</button>
        <button onClick={() => displayContent("3")}>3</button>
        <button onClick={() => displayContent("*")}>*</button>
        <button onClick={() => displayContent("0")}>0</button>
        <button onClick={() => displayContent(".")}>.</button>
        <button onClick={() => answer()}>=</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => displayContent("/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
