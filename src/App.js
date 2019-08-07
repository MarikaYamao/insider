import React from 'react';
import logo from './logo.svg';
import Setting from './components/setting.js';
import Post from './components/post.js';
import Timer from './components/timer.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 4,
      positions: [],
      theme: 'スプライト',
      viewNumber: 0,
      gameStated: false,
      gameEnd: false,
      result: false,
    };
  }
  
  // 人数設定
  viewSetting(){
    if(this.state.positions.length === 0){
      return(
        <Setting value={this.state.value}
              addClick={()=>{ this.addValue() }}
              takeClick={()=>{ this.takeValue() }}
              submit={()=>{ this.makePosition() }}
        />
      );
    }
  }
  addValue(){
    if(this.state.value >= 8)return;
    this.setState({
      value: this.state.value + 1,
    });
  }
  takeValue(){
    if(this.state.value <= 4)return;
    this.setState({
      value: this.state.value - 1,
    });
  }
  makePosition(){
    const shuffle = ([...arr]) => {
          let m = arr.length;
          while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
          }
          return arr;
        };
    const unemployed = Array(this.state.value - 2).fill('庶民');
    let positions = new Array('ゲームマスター','インサイダー').concat(unemployed);
    this.setState({
      positions: shuffle(positions),
    });
  }
  
  // 役職配布
  viewPosition(){
    let position;
    if(this.state.gameStated || this.state.gameEnd || this.state.positions.length == 0){
      return;
    }else if(this.state.positions.length > this.state.viewNumber){
      const post = this.state.positions[this.state.viewNumber];
      const theme = post === '庶民' ? '' : 'お題：' + this.state.theme; 
      position = (
        <Post number={this.state.viewNumber + 1} 
                  post={post}
                  theme={theme}
                  nextViewNumber={()=>{ this.nextViewNumber() }}/>
        );
    }else if(this.state.positions.length == this.state.viewNumber){
      position = (
        <div>
          <p>ゲームを開始します</p>
          <button onClick={()=>{ this.setState({gameStated: true}) }}>開始</button>
        </div>
        );
    }
    return position;
  }
  nextViewNumber(){
    if(this.state.positions.length === 0 || this.state.positions.length < this.state.viewNumber)return;
    this.setState({
      viewNumber: this.state.viewNumber + 1,
    });
  }
  
  // タイマー
  viewTimer(){
    if(this.state.gameStated && !this.state.gameEnd){
      return (
        <Timer end={()=>{this.setState({gameStated: false, gameEnd: true})}}/>
        );
    }else if(this.state.gameEnd && !this.state.result){
      return(
        <div className="timer">
          <p>終了しました</p>
          <button onClick={()=>{this.setState({result: true})}}>結果を見る</button>
        </div>
        );
    }
  }
  
  // 結果
  viewResult(){
    if(this.state.gameEnd && this.state.result){
      const positions = this.state.positions.map((obj, index)=>{
        return(
          <li>{index + 1}人目：{obj}</li>
          );
      });
      return(
        <div className="result">
          <p>お題：{this.state.theme}</p>
          {positions}
        </div>
        );
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        { this.viewSetting() }
        { this.viewPosition() }
        { this.viewTimer() }
        { this.viewResult() }
      </div>
    );
  }
}

export default App;
