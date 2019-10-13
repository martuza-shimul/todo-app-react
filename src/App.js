import React, { Component } from "react";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Complete React Basic" },
      { id: 2, content: "Complete React with Firebase" }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
