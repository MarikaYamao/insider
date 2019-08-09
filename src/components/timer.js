import React from 'react';

class Timer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      minutes: '05',
      seconds: '00',
      time: 300};
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.update(),
      1000
    );
  }

  stop() {
    clearInterval(this.timerId);
    this.props.end();
  }
  
  update () {
    if(this.state.time === 1)this.stop();
    const time = this.state.time - 1;
    const minutes = parseInt(time / 60 % 60);
    const seconds = time % 60;
    
    this.setState({
      minutes: ('00' + minutes).slice(-2),
      seconds: ('00' + seconds).slice(-2),
      time: time
    });
  }
  
  render(){
    return (
      <div className="timer">
        <p>残り {this.state.minutes} : {this.state.seconds}</p>
        <button onClick={()=>{this.stop()}}>終了</button>
      </div>
    );
  }
}

export default Timer;
