# react-background-image

> Display a placeholder image while the real image loads, featuring different preloading and animation options

[![NPM](https://img.shields.io/npm/v/react-background-image.svg)](https://www.npmjs.com/package/react-background-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-background-image
```

## Usage

```tsx
import React from "react";
import BackgroundImage from "react-background-image";
import placeholder from "./images/small.jpg";
import hdImage from "./images/large.jpg";

export default class App extends React.Component {
  render() {
    return (
      <main className="main">
        <BackgroundImage placeholder={placeholder} src={hdImage} />
      </main>
    );
  }
}
```

## License

MIT © [jonatanramhoj](https://github.com/jonatanramhoj)
