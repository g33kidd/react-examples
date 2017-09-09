import React, { Component } from 'react'
import createExampleHeader from 'fn/createExampleHeader'
class ChatIndex extends Component {
  render () {
    let example = createExampleHeader(
      'Chat Components',
      `Just some various chat components.`
    )
    return (
      <div>
        {example}
      </div>
    )
  }
}

export default ChatIndex
