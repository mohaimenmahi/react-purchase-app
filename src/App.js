import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    let courses = [
      {name: 'Complete iOS dev Course', price: 199},
      {name: 'Complete ReactJS Course', price: 299},
      {name: 'Complete Java Course', price: 180},
      {name: 'Complete MongoDB Course', price: 190}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase Page</h1>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
