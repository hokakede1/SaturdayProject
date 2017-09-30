import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display'

class App extends Component {
  constructor(){
    super()

    this.state = {
      count: 0
    }
    this.countUp = this.countUp.bind(this)
    this.printHuy = this.printHuy.bind(this)
  }

  countUp(){
    this.setState({
      count: this.state.count + 1
    })
  }
  printHuy(){
    if(this.state.count === 0){
      return <h1>Hello Huy</h1>
    } else if(this.state.count === 1){
      return <h1>Hello Ben</h1>
    } else if (this.state.count === 2){
      return <h1>Hello Stefano</h1>
    } else {
      return <h1>Hello Whoever</h1>
    }
  }

  render() {
    console.log("THis is the state OBJ", this.state)
    return (
      <div>
        {this.printHuy()}
        <Display count={this.state.count} />
      
        <button onClick={this.countUp}>Click Me!!!!!</button>
      </div>
    )
  }
}

export default App;
