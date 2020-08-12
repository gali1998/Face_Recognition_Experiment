import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Spreadsheet from './spreadsheet';
import Identification from './Identification';
import EndOfExperiment from './EndOfExperiment';
import ReactTimeout from 'react-timeout'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showId: true, showSpreadsheet: false, showEndOfExperiment: false};
    
  }

  handleClick(){
    alert("entered");
    this.setState({showId: false, showSpreadsheet: true});
    this.props.setTimeout(this.endExperiment, 10000);
  }

  endExperiment = () => {
    this.setState({showSpreadsheet: false, showEndOfExperiment: true})
  }
  render() {
   
    return (
      <div>
        <h1>Recall task</h1>
        <Identification clickAction = {this.handleClick.bind(this)} show = {this.state.showId}/>
        <Spreadsheet show = {this.state.showSpreadsheet}/>
        <EndOfExperiment show = {this.state.showEndOfExperiment} />
      </div>
    );
  }
}
export default ReactTimeout(App);


  

