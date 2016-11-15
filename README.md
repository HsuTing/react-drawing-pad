# React-drawing-pad

This project uses [radium](https://github.com/FormidableLabs/radium) to make drawing pad.

## Getting Started

```
yarn add react
yarn add git+https://github.com/HsuTing/react-drawing-pad.git
```

## Usage

[demo](http://hsuting.com/react-drawing-pad/) and [code](./src/components/index/Index.js)

#### Components

- Pad
- Font
- Color
- Delete
- Save
- Image

#### Example

```javascript
import React from 'react';
import {Pad, Font as FontButton} from 'react-drawing-pad';

class Example extends React.Component {
  render() {
    return (
      <Pad>
        <FontButton />
        <canvas />
      </Pad>
    );
  }
}
```

#### Pad

`canvas` and other components must be under `Pad` component.

| props | usage |
|-------|-------|
| defaultColor | default color of line. |
| defaultSize | default width of line. |

#### Font

| props | usage |
|-------|-------|
| defaultSize | default width of line. |
| inputStyle | style of input. |
| iconStyle | style of icon. |

#### Color

| props | usage |
|-------|-------|
| defaultColor | default color of line. |

## Develop

First, install packages using [yarn](https://yarnpkg.com/) (we assume you have pre-installed [npm](https://www.npmjs.com/) and [node.js](https://nodejs.org/)).

```
yarn install
```

You can see `scripts` in `package.json`.
- `production`: `production` mode.
- `watch`: watch files.
- `favicon`: render `favicon.ico` for every platform.
- `build`: make a default html with `pug` and `react server side rendering`.

## Folders
We use `babel-plugin-module-resolver`. As a result, you just need to use short name to import file.

#### src/utils(short name: utils)
Util functions.

#### src/constants(short name: constants)
Constant variables.

#### src/public(short name: public)
Main js files.

#### src/components(short name: components)
UI components.

#### src/components/share(short name: componentsShare)
All sharing UI components(like `footer` and `header`).

#### src/components/share/radium(short name: componentsShareRadium)
Some componets need to use `radium` to transform(like `Link` in `react-router`).

## License
MIT © hsuting
