import React, { Component } from 'react';
import './App.css';

import CelsiusInput from './CelciusInput';
import CelsiusToF from './CelciusToF';
import CelsiusToK from './CelciusToK';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { celsius: '1.0' };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      celsius: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Convert celsius to </h1>
        <CelsiusInput
          value={this.state.celsius}
          onChange={this.onChange}
        />
        <CelsiusToK celsius={this.state.celsius} />
        <CelsiusToF celsius={this.state.celsius} />
      </div>
    );
  }
}

export default App;