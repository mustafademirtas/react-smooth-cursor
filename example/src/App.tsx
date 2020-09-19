import React, { Fragment, useState } from 'react'
import SmoothCursor from 'react-smooth-cursor'
import 'react-smooth-cursor/dist/index.css'

const App = () => {
  const [cursorType, setCursorType] = useState<'circle' | 'square' | 'alien'>(
    'circle'
  )
  return (
    <Fragment>
      <div className='multi-button'>
        <button
          className={`${cursorType === 'square' ? 'active' : ''}`}
          onClick={() => setCursorType('square')}
        >
          Square
        </button>
        <button
          className={`${cursorType === 'circle' ? 'active' : ''}`}
          onClick={() => setCursorType('circle')}
        >
          Circle
        </button>
        <button
          className={`${cursorType === 'alien' ? 'active' : ''}`}
          onClick={() => setCursorType('alien')}
        >
          Alien
        </button>
      </div>
      <div
        className='playground'
        style={{ width: '200px', height: '200px', backgroundColor: '#ddd' }}
      >
        <span>Move cursor here</span>
      </div>
      {cursorType === 'circle' && (
        <SmoothCursor
          bindClasses={['playground']}
          fillColor='#e20c6a'
          strokeColor='#000'
          strokeWidth={1}
          circleRadius={25}
          shape='circle'
        />
      )}
      {cursorType === 'square' && (
        <SmoothCursor
          bindClasses={['playground']}
          fillColor='#e20c6a'
          strokeColor='#000'
          strokeWidth={1}
          shape='square'
          shapeSize={15}
        />
      )}
      {cursorType === 'alien' && (
        <SmoothCursor
          bindClasses={['playground']}
          fillColor='#e20c6a'
          strokeColor='#000'
          strokeWidth={1}
          shape='alien'
        />
      )}
    </Fragment>
  )
}

export default App
