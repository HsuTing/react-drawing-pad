'use strict';

import React from 'react';
import Style from 'componentsShare/Style';
import Pad from './Pad';
import DeleteButton from './button/Delete';
import SaveButton from './button/Save';
import ImageButton from './button/Image';
import style from './style/index';

export default class Index extends React.Component {
  render() {
    return (
      <div style={style.root}>
        <Style />
        <Pad style={style.pad}>
          <div style={style.control}>
            <DeleteButton />
            <SaveButton />
            <ImageButton />
          </div>
          <canvas style={style.canvas} />
        </Pad>
      </div>
    );
  }
}
