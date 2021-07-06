import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
const Calculadora = () => {
  const [count, setCount] = useState("");

  function equal() {
    setCount(eval(count));
  }
  function btnNumber(e) {
    if (e.target.value !== "equal" || "clear") {
      const value = e.target.value;
      const result = count + value;
      setCount(result);
    }
    if (e.target.value === "clear") {
      setCount("");
    }
  }
  return (
    <div id="calc-container">
      <div className="display">
        <Display count={count}></Display>
      </div>
      <Buttons btnNumber={btnNumber} equal={equal}></Buttons>
    </div>
  );
};

export default Calculadora;
