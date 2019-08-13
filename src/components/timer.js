import React from 'react';

class Timer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      minutes: '05',
      seconds: '00',
      time: 300 * 1000,
      now: new Date(),
      startTime: Date.now(),
    };
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
    const time = this.state.time - (Date.now() - this.state.startTime);
    if(time <= 900)this.stop();
    const date = new Date(time);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    this.setState({
      minutes: ('0' + minutes).slice(-2),
      seconds: ('0' + seconds).slice(-2),
      now: date,
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
