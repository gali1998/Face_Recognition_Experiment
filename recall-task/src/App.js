import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Spreadsheet from './spreadsheet';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [
        [{ value: 1, dateOfChange: null, name : "" }, { value: 2, dateOfChange: null, name: "" }],
        [{ value: 3, dateOfChange: null, name : "" }, { value: 4, dateOfChange: null, name : "" }],
      ],
      columns: [{name: "col1"}, {name: "col1"}, {name: "col1"}, {name: "col1"}]
    };
  }
  render() {
    return (
      <div>
        <h1>I am app</h1>
        <Spreadsheet grid = {this.state.grid}/>
      </div>
    );
  }
}
export default App;


  

