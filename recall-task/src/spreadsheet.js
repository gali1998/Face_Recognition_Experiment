import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';
import React, {Component} from 'react';
import './Cell.css';

class Spreadsheet extends Component {
    constructor(props) {
        super(props);
        
      }
    render() {
        return(
            <ReactDataSheet 
            className = "cell-style"
            data={this.props.grid}
            valueRenderer={cell => cell.name}
            onCellsChanged={changes => {
            const grid = this.state.grid.map(row => [...row]);
            changes.forEach(({ cell, row, col, value }) => {
                grid[row][col] = { ...grid[row][col], value };
            });
            this.setState({ grid });
            }}
        />
          );
      }
  }
  export default Spreadsheet;