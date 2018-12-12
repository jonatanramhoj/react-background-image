# react-background-image

> Display a placeholder image while the real image loads.

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
        <BackgroundImage
          placeholder={placeholder}
          src={hdImage}
          className="myCustomClass"
          {...otherProps}
        >
          <p>Other element</p>
          <OtherReactComponent />
        </BackgroundImage>
      </main>
    );
  }
}
```

## Props
| Prop  | Type | Notes | 
| ------------- | ------------- | ------------- |
| src  | String  | HD image to load  |
| placeholder  | String | Placeholder image to be immediately displayed |
| className  | String | Optional custom css class |

## Demo

https://jonatanramhoj.github.io/react-background-image/

## License

MIT © [jonatanramhoj](https://github.com/jonatanramhoj)
