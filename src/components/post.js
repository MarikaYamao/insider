import React from 'react';

function Post(props) {
  return (
    <div className="positions">
      <label for="label1">{props.number}人目</label>
      <input type="checkbox" id="label1"/>
      <div className="hidden_show">
        <p>{ props.post }</p>
        <p>{ props.theme }</p>
        <span>次へを押して次の方へ回してください</span>
      </div>
      <button onClick={props.nextViewNumber}>次へ</button>
    </div>
  );
}

export default Post;
