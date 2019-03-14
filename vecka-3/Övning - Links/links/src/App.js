import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const re = '[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*);'
const Links = (props) => {

  const words = props.children.split(" ");
  const x = words.map((word) => {
    if (re.test(word)) {
      return <a href={word}>{word}</a>;
    }
    return word;
  });


  return <>{props.children}</>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Links>Jag gillar http://www.google.com</Links>
        
      </div>
    );
  }
}

export default App;
