import { gsap } from 'gsap'
import { lerp, getMousePos } from './utils'

export default class Cursor {
  DOM: { el: SVGSVGElement }
  bounds: DOMRect
  onMouseMoveEv: () => void
  smoothness: number
  endScale: number
  endOpacity: number
  mouse: { x: number; y: number }
  renderedStyles: {
    tx: { previous: number; current: number; amt: number }
    ty: { previous: number; current: number; amt: number }
    scale: { previous: number; current: number; amt: number }
    opacity: { previous: number; current: number; amt: number }
  }

  constructor(
    el: SVGSVGElement,
    smootness?: number,
    endScale?: number,
    endOpacity?: number
  ) {
    // Assign mouse positon initial value
    this.mouse = { x: 0, y: 0 }

    // Add "mousemove" event to window
    window.addEventListener('mousemove', (ev) => (this.mouse = getMousePos(ev)))

    this.DOM = { el: el }
    this.DOM.el.style.opacity = '0'
    this.smoothness = smootness || 0.2
    this.endScale = endScale || 4
    this.endOpacity = endOpacity || 0.2

    this.bounds = this.DOM.el.getBoundingClientRect()

    if (smootness) {
      if (smootness > 1) this.smoothness = 1
      else if (smootness < 0) this.smoothness = 0
      else this.smoothness = smootness
    }

    if (endOpacity) {
      if (endOpacity > 1) this.endOpacity = 1
      else if (endOpacity < 0) this.endOpacity = 0
      else this.endOpacity = endOpacity
    }

    if (endScale) {
      if (endScale < 1) this.endScale = 1
    }

    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: this.smoothness },
      ty: { previous: 0, current: 0, amt: this.smoothness },
      scale: { previous: 1, current: 1, amt: this.smoothness },
      opacity: { previous: 1, current: 1, amt: this.smoothness }
    }

    this.onMouseMoveEv = () => {
      this.renderedStyles.tx.previous = this.renderedStyles.tx.current =
        this.mouse.x - this.bounds.width / 2
      this.renderedStyles.ty.previous = this.renderedStyles.ty.previous =
        this.mouse.y - this.bounds.height / 2
      gsap.to(this.DOM.el, {
        duration: 0.9,
        ease: 'Power3.easeOut',
        opacity: 1
      })
      requestAnimationFrame(() => this.render())
      window.removeEventListener('mousemove', this.onMouseMoveEv)
    }

    window.addEventListener('mousemove', this.onMouseMoveEv)
  }

  enter = () => {
    this.renderedStyles.scale.current = this.endScale
    this.renderedStyles.opacity.current = this.endOpacity
  }

  leave = () => {
    this.renderedStyles.scale.current = 1
    this.renderedStyles.opacity.current = 1
  }

  render = () => {
    this.renderedStyles.tx.current = this.mouse.x - this.bounds.width / 2
    this.renderedStyles.ty.current = this.mouse.y - this.bounds.height / 2

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt
      )
    }

    this.DOM.el.style.transform = `translateX(${this.renderedStyles.tx.previous}px) translateY(${this.renderedStyles.ty.previous}px) scale(${this.renderedStyles.scale.previous})`
    this.DOM.el.style.opacity = this.renderedStyles.opacity.previous.toString()

    requestAnimationFrame(() => this.render())
  }
}
