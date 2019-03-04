import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      value : null
    }
    this.handleKeypress = this.handleKeypress.bind(this);
  }
  
  handleKeypress(event) {
    console.log('*****', event.target.value);
    this.setState({ value:event.target.value });
  }
  
  render(){
    let count = 0,
        length = this.state.value?this.state.value.length:0;
    return(
      <div>
        <textarea onChange={(event)=>this.handleKeypress(event)}>{this.state.value}</textarea>
        <div>Count: {length}</div>
        <div>this.state.value: {this.state.value}</div>
      </div>
    );
  }
}

export default App;

