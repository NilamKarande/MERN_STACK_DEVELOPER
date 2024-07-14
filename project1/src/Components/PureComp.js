import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("This is Pure Component render")
    return (
      <div>pureComp</div>
    )
  }
}

export default PureComp;