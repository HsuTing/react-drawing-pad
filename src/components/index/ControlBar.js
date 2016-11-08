'use strict';

import React from 'react';

import ColorPicker from './ColorPicker';
import FontPicker from './FontPicker';
import Delete from './Delete';

import style from './style/controlBar';

export default class ControlBar extends React.Component {
  render() {
    return (
      <div style={style}>
        <FontPicker {...this.props} />
        <ColorPicker {...this.props} />
        <Delete {...this.props} />
      </div>
    );
  }
}
