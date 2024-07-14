import React, { Component } from 'react';
import bell from '../Images/bell.png';
import bell_off from '../Images/bell_off.png';

class NewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Subscribe to Technical Tour With Nilam",
      sub: "Subscribe",
      imageUrl: bell_off,
    };
  }

  styles = {
    fontStyle: "italic",
    color: "purple"
  };

  ButtonChange = () => {
    this.setState({
      message: "Hit the Bell Icon to never miss an update",
      sub: "Subscribed",
      imageUrl: bell,
    });
  };

  imageChange = () => {
    this.setState({
        imageUrl:bell,
        message: "Thank You! Happy Learning!"
    })

  }

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>
          {this.state.message}
        </h3>
        <button onClick={this.ButtonChange}>
          {this.state.sub}
        </button>
        <br />
        <img
         src={this.state.imageUrl} 
          style={{width:"30px", height:"30px"}}  
          alt="Notification bell icon" 
          onClick={this.imageChange}
        >
        </img>
      </div>
    );
  }
}

export default NewComp;
