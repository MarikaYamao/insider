import React from 'react';

function Setting(props) {
  return (
    <div className="number-people">
      <p>人数を選択してください</p>
      <input type="text" disabled="disabled" value={props.value}/>
      <button onClick={ props.addClick }>+</button>
      <button onClick={ props.takeClick }>-</button>
      <button onClick={ props.submit }>役職を配る</button>
    </div>
  );
}

export default Setting;
