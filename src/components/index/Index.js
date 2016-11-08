'use strict';

import React from 'react';
import radium from 'radium';
import Style from 'componentsShare/Style';

import DrawingPad from './DrawingPad';

import style from './style/index';

@radium
export default class Index extends React.Component {
  render() {
    return (
      <div style={style}>
        <Style />
        <DrawingPad />
      </div>
    );
  }
}
