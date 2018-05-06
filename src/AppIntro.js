import React from 'react'
import theme from './theme'


const style = {
  fontSize: 'large',
  padding:theme.spacing
}

class AppIntro extends React.Component {
  render (){
    return (
      <div style={style}>
        {
          this.props.beautify ?
          this.props.beautify(this.props.message):
          this.props.message
        }
      </div>
    )
  }
}

export default AppIntro