import React, { Fragment } from 'react'

import SmoothCursor from 'react-smooth-cursor'
import 'react-smooth-cursor/dist/index.css'

const App = () => {
  return (
    <Fragment>
      <div
        className='playground'
        style={{ width: '200px', height: '200px', backgroundColor: '#ddd' }}
      >
        <span>Move cursor here</span>
      </div>
      <SmoothCursor
        bindClasses={['playground']}
        fillColor='#e20c6a'
        strokeColor='#000'
        strokeWidth={1}
        cursorRadius={25}
      />
    </Fragment>
  )
}

export default App
