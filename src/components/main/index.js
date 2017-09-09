import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainIndex extends Component {
  render () {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/ritekit">RiteKit</Link>
        <Link to="/chat">Chat</Link>
      </div>
    )
  }
}

export default MainIndex
