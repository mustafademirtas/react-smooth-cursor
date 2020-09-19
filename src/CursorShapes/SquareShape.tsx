import React, { forwardRef } from 'react'
import styles from '../styles.module.css'

interface Props {
  size: number
  fillColor: string
  strokeColor: string
  strokeWidth: number
}

const SquareShape = forwardRef<SVGSVGElement, Props>((props, ref) => {
  const { size, fillColor, strokeColor, strokeWidth } = props
  return (
    <svg
      ref={ref}
      className={`${styles.cursor} cursor`}
      width={`${size}`}
      height={`${size}`}
      viewBox={`0 0 ${size} ${size}`}
    >
      <rect
        width={`${size}`}
        height={`${size}`}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        className={`${styles.cursor} cursor__inner`}
      />
    </svg>
  )
})

export default SquareShape
