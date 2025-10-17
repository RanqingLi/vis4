import './ResultBar.css';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function ResultBar() {
const dispatch = useDispatch();

const count = useSelector((state) => state.count);
const history = useSelector((state) => state.history);

  return (
    <div className="resultbar">
      <h3>Result</h3>
      <p id="resultId">{count}</p>
      <p id="totalMessage"></p>
      <h3>History List</h3>
      <div id="summary"></div>
      <ul id="historylist"></ul>
        {history.map((item, i) => (
          <li 
            key={i}
            onClick= {() => dispatch({ type:'UPDATE_HISTORY', payload: i })}
          >{item}</li>
        ))}
    </div>
  );
}

export default ResultBar;