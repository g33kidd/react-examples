import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import styled from 'styled-components'

import MainIndex from 'components/main'
import RiteIndex from 'components/ritekit'
import ChatIndex from 'components/chat'

// const examples = [
//   { path: '/', component: MainIndex },
//   { path: '/ritekit', component: RiteIndex },
//   { path: '/chat', component: ChatIndex }
// ]

export default () => {
  return (
    <HashRouter>
      <div>
        <Route path="/" component={MainIndex} exact />
        <Route path="/ritekit" component={RiteIndex} />
        <Route path="/chat" component={ChatIndex} />
      </div>
    </HashRouter>
  )
}
