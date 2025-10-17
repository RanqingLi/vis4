import "./navbar.css"
import React, {useState} from 'react';

//const headerTitle = "This is a Navbar";
// let myStyle = {
//   color: "red",
//   backgroundColor: "white",
// }

function Navbar(props) {
  //return <h1 style={myStyle}>{props.headerTitle}</h1>;
  //var count=12
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="NavbarTitle">{props.headerTitle}</h1>
      <p>Total: {count}</p>

      <button onClick={() =>{
        setCount(count + 1);
        console.log("Added 1");
      }}>Add 1</button>

      <button onClick={() =>{
        setCount(count - 1);
        console.log("Removed 1");
      }}>Remove 1</button>
      
      <button onClick={() =>setCount(0)}>Reset</button>
    </div>
    );
}

export default Navbar; 