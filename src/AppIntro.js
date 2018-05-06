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
        Hello everyone :)
      </div>
    )
  }
}

export default AppIntro