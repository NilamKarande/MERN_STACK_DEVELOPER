import React, { Component } from 'react'

export class ClassProps extends Component {
  render() {
    return (
      <div>

        <h3>Hello {this.props.name}.</h3>


      </div>
    )
  }
}

export default ClassProps