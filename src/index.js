import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import styled from 'styled-components'

import { BrowserRouter, Route } from 'react-router-dom'
import RiteIndex from 'components/ritekit'

import 'font-awesome/css/font-awesome.css'
import 'lato-font/css/lato-font.css'

const AppContainer = styled.div`
  font-family: 'Lato', sans-serif;
`

ReactDOM.render((
  <AppContainer>
    <BrowserRouter>
      <Route path="/" component={RiteIndex} />
    </BrowserRouter>
  </AppContainer>
), document.getElementById('root'));
registerServiceWorker();
