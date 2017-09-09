import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components'
import createApp from 'fn/createApp'

import 'font-awesome/css/font-awesome.css'
import 'lato-font/css/lato-font.css'

ReactDOM.render(
  createApp(),
  document.getElementById('root')
);

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
  }
`

registerServiceWorker();
