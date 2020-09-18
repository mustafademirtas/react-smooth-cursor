import * as React from 'react'
import Cursor from './Cursor'
import styles from './styles.module.css'

const bindCursorEvent = (cursor: Cursor, bindClasses: string[]) => {
  if (!bindClasses) return
  bindClasses.forEach((bindClass) => {
    document.querySelectorAll('.' + bindClass).forEach((item) => {
      item.addEventListener('mouseenter', cursor.enter)
    })
    document.querySelectorAll('.' + bindClass).forEach((item) => {
      item.addEventListener('mouseleave', cursor.leave)
    })
  })
}

const unbindCursorEvent = (cursor: Cursor, bindClasses: string[]) => {
  if (!bindClasses) return
  bindClasses.forEach((bindClass) => {
    document.querySelectorAll('.' + bindClass).forEach((item) => {
      item.removeEventListener('mouseenter', cursor.enter)
    })
    document.querySelectorAll('.' + bindClass).forEach((item) => {
      item.removeEventListener('mouseleave', cursor.leave)
    })
  })
}

export interface SmoothCursorProps {
  shape?: 'circle' | 'square'
  bindClasses?: string[]
  fillColor?: string
  strokeColor?: string
  strokeWidth?: number
  smoothness?: number

  circleRadius?: number
  squareSize?: number
}

const SmoothCursor = ({
  shape,
  bindClasses,
  fillColor,
  strokeColor,
  strokeWidth,
  circleRadius,
  squareSize,
  smoothness
}: SmoothCursorProps) => {
  const cursorRef = React.useRef<SVGSVGElement>()
  const mRadius = circleRadius || 25
  const mSize = squareSize || 25
  const mShape = shape || 'circle'
  const mSmoothness = smoothness || 0.2

  React.useEffect(() => {
    if (!cursorRef) return null

    const mCursor = new Cursor(cursorRef.current, mSmoothness)

    bindCursorEvent(mCursor, bindClasses)
    return () => {
      unbindCursorEvent(mCursor, bindClasses)
    }
  }, [cursorRef])

  const renderShape = () => {
    switch (mShape) {
      case 'circle':
        return (
          <svg
            ref={cursorRef}
            className={`${styles.cursor} cursor`}
            width={`${mRadius}`}
            height={`${mRadius}`}
            viewBox={`0 0 ${mRadius} ${mRadius}`}
          >
            <circle
              className={`${styles.cursor} cursor__inner`}
              cx={`${mRadius / 2}`}
              cy={`${mRadius / 2}`}
              r={`${mRadius / 4}`}
              fill={fillColor || '#fff'}
              stroke={strokeColor || '#000'}
              strokeWidth={strokeWidth || 1}
            />
          </svg>
        )
      case 'square':
        return (
          <svg
            ref={cursorRef}
            className={`${styles.cursor} cursor`}
            width={`${mSize}`}
            height={`${mSize}`}
            viewBox={`0 0 ${mSize} ${mSize}`}
          >
            <rect
              width={`${mSize}`}
              height={`${mSize}`}
              fill={fillColor || '#fff'}
              stroke={strokeColor || '#000'}
              strokeWidth={strokeWidth || 1}
              className={`${styles.cursor} cursor__inner`}
            />
          </svg>
        )
      default:
        return (
          <svg
            ref={cursorRef}
            className={`${styles.cursor} cursor`}
            width={`${mRadius}`}
            height={`${mRadius}`}
            viewBox={`0 0 ${mRadius} ${mRadius}`}
          >
            <circle
              className={`${styles.cursor} cursor__inner`}
              cx={`${mRadius / 2}`}
              cy={`${mRadius / 2}`}
              r={`${mRadius / 4}`}
              fill={fillColor || '#000'}
              stroke={strokeColor || '#000'}
              strokeWidth={strokeWidth || 1}
            />
          </svg>
        )
    }
  }

  return <React.Fragment>{renderShape()}</React.Fragment>
}

export default SmoothCursor
