import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Spreadsheet from './spreadsheet';

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div>
        <h1>I am app</h1>
        <Spreadsheet />
      </div>
    );
  }
}
export default App;


  

