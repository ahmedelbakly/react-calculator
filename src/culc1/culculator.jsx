import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const createNum = () => {
    let digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateNumber(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };
  // 01228443526 rana sayed

  const [number, setNumber] = useState("");
  const [result, setResult] = useState();
  const [calculate, setCalculate ] = useState("0")
  const oprs = ["+", "-", "/", "*"];

  const updateNumber = (value) => {
    if (
      (oprs.includes(value) && number === "") ||
      (oprs.includes(value) && oprs.includes(number.slice(-1)))
    ) {
      return;
    }

    setNumber(number + value);

    if (!oprs.includes(value)) {
      return setResult(eval(number + value).toString());
    }
  };

  return (
    <div className="container">
   <div className="calculator"> 
        <div className="display">
          {number || "0"} <br/>
          <hr/>
          {calculate||"0"}
        </div>

        <div className="sym-con">
          <button onClick={() => updateNumber("+")}>+</button>
          <button onClick={() => updateNumber("-")}>-</button>
          <button onClick={() => updateNumber("*")}>x</button>
          <button onClick={() => updateNumber("/")}>/</button>
          <button onClick={() => {
            
            setNumber(number.slice(0, -1))
            setCalculate("0")
          
          
          }}>Del</button>
        </div>
        <div className="num-con">
          {createNum()}
          <button onClick={() => updateNumber("0")}>0</button>
          <button onClick={() => updateNumber(".")}>.</button>
          <button onClick={()=>{
            setCalculate(result)
            
          }} >=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
