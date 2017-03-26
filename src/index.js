import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import { injectGlobal } from 'styled-components'
import MasterOfBreak from './fonts/master_of_break.otf'
import Catamaran from './fonts/Catamaran-Regular.ttf'
import normalize from 'normalize.css'

injectGlobal`
  @font-face {
    font-family: MasterOfBreak;
    src: url('${MasterOfBreak}') format('opentype');
  }

  @font-face {
    font-family: Catamaran;
    src: url('${Catamaran}') format('truetype');
  }

  ${normalize}
  box-sizing: border-box;
  *, *:before, *:after
  box-sizing: inherit
`

ReactDOM.render(
  <Home />,
  document.getElementById('root')
)
