import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activePage: "home" };
  }
  handleClick(e) {}
  render() {
    return (
      <div className="App">
        <main>
          <button
            type="button"
            onClick={() => this.setState({ activePage: "home" })}
            style={{ color: this.state.activePage === "home" ? "red" : "blue" }}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => this.setState({ activePage: "about" })}
            style={{
              color: this.state.activePage === "about" ? "red" : "blue"
            }}
          >
            About
          </button>
        </main>

        <div>This is the {this.state.activePage} page</div>
      </div>
    );
  }
}

export default App;