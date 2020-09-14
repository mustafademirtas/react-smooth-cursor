import * as React from 'react'
import Cursor from './Cursor'
import styles from './styles.module.css'

const bindCursorEvent = (cursor: Cursor, bindClasses: string[]) => {
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
  bindClasses: string[]
  fillColor?: string
  strokeColor?: string
  strokeWidth?: number
  cursorRadius?: number
}

const SmoothCursor = ({
  bindClasses,
  fillColor,
  strokeColor,
  strokeWidth,
  cursorRadius
}: SmoothCursorProps) => {
  const cursorRef = React.useRef<SVGSVGElement>()
  const rad = cursorRadius || 25

  React.useEffect(() => {
    if (!cursorRef) return null

    const mCursor = new Cursor(cursorRef.current)

    bindCursorEvent(mCursor, bindClasses)
    return () => {
      unbindCursorEvent(mCursor, bindClasses)
    }
  }, [cursorRef])

  return (
    <svg
      ref={cursorRef}
      className={`${styles.cursor} cursor`}
      width={`${rad}`}
      height={`${rad}`}
      viewBox={`0 0 ${rad} ${rad}`}
    >
      <circle
        className={`${styles.cursor} cursor__inner`}
        cx={`${rad / 2}`}
        cy={`${rad / 2}`}
        r={`${rad / 4}`}
        fill={fillColor || '#000'}
        stroke={strokeColor || '#000'}
        strokeWidth={strokeWidth || 1}
      />
    </svg>
  )
}

export default SmoothCursor
