# react-smooth-cursor

> Smooth cursor library

<div align="center">
    <img src="screenshots/ScreenRecord01.gif" width="100%" />
</div>

[![NPM](https://img.shields.io/npm/v/react-smooth-cursor.svg)](https://www.npmjs.com/package/react-smooth-cursor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/mustafademirtas/react-smooth-cursor.svg?branch=master)](https://travis-ci.org/mustafademirtas/react-smooth-cursor)

## Preview

[Try it](https://mustafademirtas.github.io/react-smooth-cursor/)

## Install

```bash
yarn add react-smooth-cursor
```

or

```bash
npm install react-smooth-cursor
```

## Usage

```tsx
import React, { Component } from 'react'

import SmoothCursor from 'react-smooth-cursor'
import 'react-smooth-cursor/dist/index.css'

class Example extends Component {
  render() {
    (
    return
    <SmoothCursor
      // Required
      selectors={['antValidCssSelector01','antValidCssSelector02']}
      // Optionals
      fillColor='#e20c6a'
      strokeColor='#000'
      strokeWidth={1}
      cursorRadius={25}
    />
    )
  }
}

// or

const Example = () => {
  return(
  <SmoothCursor
    // Required
    selectors={['antValidCssSelector01','antValidCssSelector02']}
    // Optionals
    fillColor='#e20c6a'
    strokeColor='#000'
    strokeWidth={1}
    cursorRadius={25}
  />
  )
}
```

## General Props

| Option        | Type      | Description                                                    | Default     |
| ------------- | --------- | -------------------------------------------------------------- | ----------- |
| `selectors`   | string[ ] | Anys valid css selectors list which cursor will be animated on | `undefined` |
| `shape`       | string    | Shape of cursor ("circle", "square", "alien")                  | `circle`    |
| `fillColor`   | string    | Inside color of cursor                                         | `#fff`      |
| `strokeColor` | string    | Border color of cursor                                         | `#000`      |
| `strokeWidth` | number    | Border width of cursor                                         | `1`         |
| `smoothness`  | number    | Smooth movement value of cursor (0 - 1.0)                      | `0.2`       |
| `endScale`    | number    | Cursor scale animation to value (1 to infinity)                | `4`         |
| `endOpacity`  | number    | Cursor opacity animation to value (0 - 1.0)                    | `0.2`       |

## Circle Cursor Props

| Option         | Type   | Description   | Default |
| -------------- | ------ | ------------- | ------- |
| `circleRadius` | number | Cursor radius | `25`    |

## Square Cursor Props

| Option      | Type   | Description | Default |
| ----------- | ------ | ----------- | ------- |
| `shapeSize` | number | Square size | `25`    |

## Alien Cursor Props

| Option      | Type   | Description | Default |
| ----------- | ------ | ----------- | ------- |
| `shapeSize` | number | Alien size  | `25`    |

## License

MIT © [mustafademirtas](https://github.com/mustafademirtas)
