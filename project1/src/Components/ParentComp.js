import React, { Component } from 'react';
import RegularComp from './RegularComp';
import PureComp from './PureComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: "Nilam"
    };
  }

  componentDidMount(){
    setInterval(() => {
        this.setState({
            name: "Nilam"
        });
        
    }, 3000);
  }

  render() {
    console.log("This is Parent Component render");

    return (
      <div>ParentComp
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
