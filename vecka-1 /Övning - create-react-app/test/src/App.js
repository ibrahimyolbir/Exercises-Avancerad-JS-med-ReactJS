import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div className="App">
          <input type="text" placeholder="name" value={this.state.name} onChange={this.onChange}/>
          <p>Hello {this.state.name}</p>
      </div>
    );
  }
}

export default App;