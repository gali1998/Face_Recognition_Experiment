import React, {Component} from 'react';

class EndOfExperiment extends Component {
    constructor(props) {
        super(props);
      }
    
      render() {
        if (this.props.show == false){
          return null;
        }
        return (
          <div>
              <h1>experiment ended</h1>
        <h1>{this.props.id}</h1>
        
          </div>
        );
      }
}

export default EndOfExperiment;
