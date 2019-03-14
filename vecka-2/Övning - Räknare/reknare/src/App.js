import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.incrementAll = this.incrementAll.bind(this);
    this.decrementAll = this.decrementAll.bind(this);
    this.resetAll = this.resetAll.bind(this);

    this.state = {
      count1: 0,
      count2: 0,
      count3: 0,
    }


  }
  incrementAll(x) {
    this.setState({
      count1: this.state.count1  + 1,
      count2: this.state.count2 + 1,
      count3: this.state.count3 + 1
    });
  }

  decrementAll(x) {
    this.setState({
      count1: this.state.count1  - 1,
      count2: this.state.count2 - 1,
      count3: this.state.count3 - 1
    });
  }
  resetAll() {
    this.setState({
      count1: this.state.count1  =0,
      count2: this.state.count2 =0,
      count3: this.state.count3 =0
    });
  };
  increment(x) {
    this.setState({
      ["count" + x]: this.state["count" + x] + 1
    });
  }
  decrement(x) {
    this.setState({
      ["count" + x]: this.state["count" + x] - 1
    });

  }

  render() {
    return (
      <div className="App">
        
        <div className="counter1">
          <button onClick={() => this.decrement(1)}> - </button>
          <h1>{this.state.count1}</h1>
          <button onClick={() => this.increment(1)}> + </button>
        </div>

        <div className="counter2">
          <button onClick={() => this.decrement(2)}> - </button>
          <h1>{this.state.count2}</h1>
          <button onClick={() => this.increment(2)}> + </button>
        </div>
        
        <div className="counter3">
          <button onClick={() => this.decrement(3)}> - </button>
          <h1>{this.state.count3}</h1>
          <button onClick={() => this.increment(3)}> + </button>
        </div>
        
        <div className="allButtons">
        {/* ////////////////// incrementAll ///////////////////////////*/}
        <button onClick={() => this.incrementAll()}>öka alla</button>


        {/* //////////////////  decrementAll ////////////////////////*/}
        <button onClick={() => this.decrementAll()}>minska alla</button>



        {/* //////////////////  resetAll ////////////////////////*/}
        <button onClick={() => this.resetAll()}>Reset</button>
        </div>

      </div>
    );
  }
}

export default App;
