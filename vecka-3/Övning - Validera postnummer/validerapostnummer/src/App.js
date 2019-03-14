import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adresserror: '',
      adress: ''
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ adress: e.target.value }, () => {
      console.log(this.state.adress);
    })

  }
  validate() {
  if (!this.state.adress.match(/^\d{3} {0,1}\d{2}$/)) { 
    return false;
  }

  return true;
}

render() {
  const adressIsValid = this.validate();

  return (
    <div className="App">
      <input type="text" placeholder="adress" value={this.state.adress} onChange={this.onChange} />
      <p>{this.state.adresserror}</p>
      <p>{adressIsValid ? "Valid" : "Invalid"}</p>
    </div>
  );
}
}

export default App;
