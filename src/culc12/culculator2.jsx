import React, { useState } from "react";
import "./Calculator2.css";

const Calculator2 = () => {
 
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
      <div className="calculator2">
        <div className="display">
          {number || "0"} <br/>
          <hr/>
          {calculate||"0"}
        </div>
        <table>
        <tr className="tr1">
        <td><button onClick={()=>{
          setNumber(number.slice(0,-1));

        }}>Del</button></td>
        <td><button onClick={()=>{
          setNumber("");
          setResult();
          setCalculate("0");

        }}>C</button></td> 
        <td><button onClick={()=>updateNumber("+")}>+</button></td> 
        </tr>
        <tr className="tr2">
        <td><button onClick={()=>updateNumber("1")}>1</button></td>
        <td><button onClick={()=>updateNumber("2")}>2</button></td> 
        <td><button onClick={()=>updateNumber("3")}>3</button></td> 
        <td><button onClick={()=>updateNumber("-")}>-</button></td> 
        </tr>
        <tr className="tr2">
        <td><button onClick={()=>updateNumber("4")}>4</button></td>
        <td><button onClick={()=>updateNumber("5")}>5</button></td> 
        <td><button onClick={()=>updateNumber("6")}>6</button></td> 
        <td><button onClick={()=>updateNumber("*")}>X</button></td> 
        </tr>
        <tr className="tr2">
        <td><button onClick={()=>updateNumber("7")}>7</button></td>
        <td><button onClick={()=>updateNumber("8")}>8</button></td>
        <td><button onClick={()=>updateNumber("9")}>9</button></td>
        <td><button onClick={()=>updateNumber("/")}>/</button></td> 
        </tr>
        <tr className="tr1">
        <td><button onClick={()=>updateNumber("0")}>0</button></td>
        <td><button onClick={()=>updateNumber(".")}>.</button></td>
        <td><button onClick={()=>setCalculate(result)}>=</button></td>
       
        </tr>
        </table>

      
      </div>
    </div>
  );
};

export default Calculator2;
