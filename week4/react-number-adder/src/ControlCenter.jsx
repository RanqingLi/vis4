import './ControlCenter.css';


import React from 'react';
import { useDispatch } from 'react-redux';

function ControlCenter() {

const dispatch = useDispatch();

const handleAdd2 = () =>{
  dispatch({
    type: 'ADD_2',

  })
}

const handleAdd1 = () =>{
  dispatch({
    type: 'ADD_1',

  })
}

const handleReset = () =>{
  dispatch({
    type: 'RESET',

  })
}

const handleRemove2 = () =>{
  dispatch({
    type: 'REMOVE_2',

  })
}

const handleRemove1 = () =>{
  dispatch({
    type: 'REMOVE_1',

  })
}
const handleClearAll = () =>{
  dispatch({
    type: 'CLEAR_ALL',

  })
}

  return (
    <div className="controlCenter">
      <h3>Control Center</h3>
      <div className="controlButtons">

      <button id="minustwo" onClick={() => {
        console.log("-2");
        handleRemove2();
      }}>-2</button>

      <button id="minusone" onClick={() => {
        console.log("-1");
        handleRemove1();
      }}>-1</button>

      <button id="reset" onClick={() => {
        console.log("Reset");
        handleReset();
      }}>Reset</button>

      <button id="plusone" onClick={() => {
        console.log("+1");
        handleAdd1();
      }}>+1</button>
      <button id="plustwo" onClick={() => {
        console.log("+2");
        handleAdd2();
      }}>+2</button>

      </div>
      <button id="clearAll" onClick={() => {
        console.log("Clear History & Results");
        handleClearAll();
      }}>Clear History & Results</button>
    </div>
  );
}

export default ControlCenter;
