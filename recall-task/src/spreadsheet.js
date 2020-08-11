import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';
import React, {Component} from 'react';
import './Cell.css';

class Spreadsheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [
              [{ value: "col1", dateOfChange: null, className: "cell-header", readOnly: true }, { value: "col2", dateOfChange: null, readOnly: true, className: "cell-header"}],
              [{ value: "", dateOfChange: null }, { value: "", dateOfChange: null}],
            ],
            columns: [{name: "col1"}, {name: "col1"}]
          };
      }
    render() {
        return(
            <ReactDataSheet 
            className = "cell-style"
            data={this.state.grid}
            valueRenderer={cell => cell.value}
            
            onCellsChanged={changes => {
            const grid = this.state.grid.map(row => [...row]);
            changes.forEach(({ cell, row, col, value }) => {
                if (value.length > 1){
                    grid[row][col] = { ...grid[row][col], value, dateOfChange: new Date(), readOnly: true };
                    console.log(grid[row][col])
                }
            });
            this.setState({ grid });
            }}
        />
          );
      }
  }
  export default Spreadsheet;