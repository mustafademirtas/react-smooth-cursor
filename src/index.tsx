import * as React from 'react'
import Cursor from './Cursor'
import { AlienShape, CircleShape, SquareShape } from './CursorShapes'
// import styles from './styles.module.css'

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
  shape?: 'circle' | 'square' | 'alien'
  bindClasses?: string[]
  fillColor?: string
  strokeColor?: string
  strokeWidth?: number
  smoothness?: number
  endScale?: number
  endOpacity?: number

  circleRadius?: number
  shapeSize?: number
}

const SmoothCursor = ({
  shape,
  bindClasses,
  fillColor,
  strokeColor,
  strokeWidth,
  circleRadius,
  smoothness,
  shapeSize,
  endScale,
  endOpacity
}: SmoothCursorProps) => {
  const cursorRef = React.useRef<SVGSVGElement>()
  const mRadius = circleRadius || 25
  const mShape = shape || 'circle'

  const mFillColor = fillColor || '#fff'
  const mStrokeColor = strokeColor || '#000'
  const mStrokeWidth = strokeWidth || 1

  const mShapeSize = shapeSize || 25

  React.useEffect(() => {
    if (!cursorRef) return null

    const mCursor = new Cursor(
      cursorRef.current,
      smoothness,
      endScale,
      endOpacity
    )

    bindCursorEvent(mCursor, bindClasses)
    return () => {
      unbindCursorEvent(mCursor, bindClasses)
    }
  }, [cursorRef])

  const renderShape = () => {
    switch (mShape) {
      case 'circle':
        return (
          <CircleShape
            ref={cursorRef}
            radius={mRadius}
            fillColor={mFillColor}
            strokeColor={mStrokeColor}
            strokeWidth={mStrokeWidth}
          />
        )
      case 'square':
        return (
          <SquareShape
            ref={cursorRef}
            size={mShapeSize}
            fillColor={mFillColor}
            strokeColor={mStrokeColor}
            strokeWidth={mStrokeWidth}
          />
        )
      case 'alien':
        return (
          <AlienShape
            ref={cursorRef}
            size={mShapeSize}
            fillColor={mFillColor}
            strokeColor={mStrokeColor}
            strokeWidth={mStrokeWidth}
          />
        )
      default:
        return (
          <CircleShape
            ref={cursorRef}
            radius={mRadius}
            fillColor={mFillColor}
            strokeColor={mStrokeColor}
            strokeWidth={mStrokeWidth}
          />
        )
    }
  }

  return <React.Fragment>{renderShape()}</React.Fragment>
}

export default SmoothCursor
