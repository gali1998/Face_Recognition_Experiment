import React, {Component} from 'react';

class Identification extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', id: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        if (this.state.value.length > 9){
            alert("תז ארוך מידי");
            return;
        }
        if (this.state.value.length < 9){
            alert("תז קצר מידי");
            return;
        }

        let id = this.state.value;
        if(id.match("^[1-9 ]*$")==null) {
          alert("תז חייב להכיל מספרים בלבד");
          return;
        }
       
        this.setState({id: id})
        this.props.clickAction(id);
        event.preventDefault();
      }
    
      render() {
        if (this.props.show == false){
          return null;
        }
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default Identification;