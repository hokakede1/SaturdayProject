import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Goodbye from './components/Goodbye';




class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      age: 20
    }

  }
  render() {
    return (
      <div>
        <Hello />
        <Goodbye nickname="Huy" name2="John" name3="Ben" age={this.state.age}/>
      </div>
    );
  }
}

export default App;
