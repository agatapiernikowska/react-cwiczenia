import React, {Component} from 'react'

class MagicNumber extends Component {
  render () {
    console.log(this.props.match.params.number)
    return (
      <h1>Magic number</h1>
    )
  }
}

export default MagicNumber
