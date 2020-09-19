import React, { forwardRef } from 'react'
import styles from '../styles.module.css'

interface Props {
  radius: number
  fillColor: string
  strokeColor: string
  strokeWidth: number
}

const CircleShape = forwardRef<SVGSVGElement, Props>((props, ref) => {
  const { radius, fillColor, strokeColor, strokeWidth } = props
  return (
    <svg
      ref={ref}
      className={`${styles.cursor} cursor`}
      width={`${radius}`}
      height={`${radius}`}
      viewBox={`0 0 ${radius} ${radius}`}
    >
      <circle
        className={`${styles.cursor} cursor__inner`}
        cx={`${radius / 2}`}
        cy={`${radius / 2}`}
        r={`${radius / 4}`}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  )
})

export default CircleShape
