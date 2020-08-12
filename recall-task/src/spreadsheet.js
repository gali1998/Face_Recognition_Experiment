import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';
import React, {Component} from 'react';
import './Cell.css';
import {getGrid} from './gridGenerator'

class Spreadsheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: getGrid(),
          };
      }
      sendData = () => {
        this.props.getData(this.state.grid);
      }
    render() {
        
        if (this.props.show == false){
            if (this.props.ended == true && this.props.didGetTable == false){
                this.sendData()
            }
            return null;
        }

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