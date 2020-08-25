import React,{Component} from 'react';
import classes from './App.module.css';

class App extends Component{
state ={
  hours:"00",
  minutes : "00",
  seconds: "00",
  myVar : null,
  timerStarted:true
}

  startTimer=()=>{
    this.state.timerStarted ===true && this.setState({timerStarted:false})
    if(this.state.timerStarted===true){
    this.setState({myVar:setInterval(  ()=>{
      this.setState((prevState,props)=>{
        return {
          seconds:prevState.seconds<9 ?('0'+(1*(prevState.seconds)+1)):(1*prevState.seconds)+1
        }
      })
      if(this.state.seconds>59){
        this.setState((prevState,props)=>{
          return{
            seconds:"00",
            minutes:prevState.minutes<9?('0'+(1*(prevState.minutes)+1)):(1*prevState.minutes)+1
          }
        })
      }
      if(this.state.minutes>59){
        this.setState((prevState,props)=>{
          return{
            minutes:"00",
            hours:prevState.hours<9?('0'+(1*(prevState.hours)+1)):(1*prevState.hours)+1
          }
        })
      } 
      if(this.state.hours>23){
        this.setState({hours:"00"})
      }
  },1000)
})
  
}
  
}

stopTimer=()=>{
  clearInterval(this.state.myVar);
  this.state.timerStarted===false && this.setState({timerStarted:true})
}
  
  render(){
    
    return(
      <div className={classes.App}>
        <h1 >{this.state.hours}:{this.state.minutes}.{this.state.seconds}</h1>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
      </div>
    )
  }

}
export default App;
