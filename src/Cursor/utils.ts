// Map number x from range [a, b] to [c, d]
const map = (x: number, a: number, b: number, c: number, d: number) =>
  ((x - a) * (d - c)) / (b - a) + c

// Linear interpolation
const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b

// Calculate window size
const calcWinsize = () => {
  return { width: window.innerWidth, height: window.innerHeight }
}

// Gets the mouse position
const getMousePos = (e: any) => {
  let posx = 0
  let posy = 0
  if (!e) e = window.event
  if (e.pageX || e.pageY) {
    posx = e.pageX
    posy = e.pageY
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop
  }

  return { x: posx, y: posy }
}

// Calculate distance between two points
const distance = (x1: number, y1: number, x2: number, y2: number) => {
  var a = x1 - x2
  var b = y1 - y2

  return Math.hypot(a, b)
}

// Generate a random float.
const getRandomFloat = (min: number, max: number) =>
  (Math.random() * (max - min) + min).toFixed(2)

export { map, lerp, calcWinsize, getMousePos, distance, getRandomFloat }
