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
    this.state = {showId: true, showSpreadsheet: false, showEndOfExperiment: false, id: '', table: [], didGetTable: false};
    
  }

  handleClick(id){
    this.setState({showId: false, showSpreadsheet: true, id: id});
    this.props.setTimeout(this.endExperiment, 10000);
  }

  endExperiment = () => {
    this.setState({showSpreadsheet: false, showEndOfExperiment: true})
  }

  getData = async (grid)=> {
    await this.setState({table:grid, didGetTable: true})
  }

  render() {
   
    return (
      <div className="general">
        <Identification clickAction = {this.handleClick.bind(this)} show = {this.state.showId}/>
        <Spreadsheet getData={this.getData.bind(this)} ended={this.state.showEndOfExperiment} didGetTable={this.state.didGetTable} show = {this.state.showSpreadsheet}/>
        <EndOfExperiment id={this.state.id} show = {this.state.didGetTable} />
      </div>
    );
  }
}
export default ReactTimeout(App);


  

