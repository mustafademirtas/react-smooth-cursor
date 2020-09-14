# react-smooth-cursor

> Smooth cursor library

<div align="center">
    <img src="screenshots/ScreenRecord001.gif" width="100%" />
</div>

[![NPM](https://img.shields.io/npm/v/react-smooth-cursor.svg)](https://www.npmjs.com/package/react-smooth-cursor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
    return
      <SmoothCursor
        // Required
        bindClasses={['animateOnClassName']}

        // Optionals
        fillColor='#e20c6a'
        strokeColor='#000'
        strokeWidth={1}
        cursorRadius={25}
      />
  }
}

// or

const Example = ()=> {
  return
      <SmoothCursor
        // Required
        bindClasses={['animateOnClassName']}

        // Optionals
        fillColor='#e20c6a'
        strokeColor='#000'
        strokeWidth={1}
        cursorRadius={25}
      />;
}
```

## License

MIT © [mustafademirtas](https://github.com/mustafademirtas)
