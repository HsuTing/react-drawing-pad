'use strict';

import React from 'react';
import Style from 'componentsShare/Style';

import DrawingPad from './DrawingPad';
import ControlBar from './ControlBar';

import style from './style/index';

import data from './static';

export default class Index extends React.Component {
  render() {
    return (
      <div style={style}>
        <Style />
        <DrawingPad>
          <ControlBar items={data.items} />
        </DrawingPad>
      </div>
    );
  }
}
