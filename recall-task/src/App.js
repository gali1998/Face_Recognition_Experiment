import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Spreadsheet from './spreadsheet';
import Identification from './Identification';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showId: true, showSpreadsheet: false};
    
  }

  handleClick(){
    alert("entered");
    this.setState({showId: false, showSpreadsheet: true});
    alert(this.state.showId)
    alert("i changed states");
  }
  render() {
   
    return (
      <div>
        <h1>I am app</h1>
        <Identification clickAction = {this.handleClick.bind(this)} show = {this.state.showId}/>
        <Spreadsheet show = {this.state.showSpreadsheet}/>
      </div>
    );
  }
}
export default App;


  

