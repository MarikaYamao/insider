import React from 'react';

function Setting(props) {
  return (
    <div className="number-people">
      <input type="text" disabled="disabled" value={props.value}/>
      <button onClick={ props.addClick }>+</button>
      <button onClick={ props.takeClick }>-</button>
      <button onClick={ props.submit }>submit</button>
    </div>
  );
}

export default Setting;
