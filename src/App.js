import React, { Component } from 'react';
import TimerDashboard from "./components/TimerDashboard";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimerDashboard />
      </div>
    );
  }
}

export default App;
