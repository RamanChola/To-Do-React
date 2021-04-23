import React, { useState } from "react";

function App() {
  var [inputs, setInputs] = useState([]);
  const [text, setText] = useState("");

  function changeHandler(e) {
    const value = e.target.value;
    setText(value);
  }
  function submitChange() {
    setInputs((prevValue) => {
      return [...prevValue, text];
    });
    setText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandler} type="text" value={text}></input>
        <button onClick={submitChange}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {inputs.map((e) => {
          return (
            <ul>
              <li>{e}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
