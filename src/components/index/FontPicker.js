'use strict';

import React from 'react';
import radium from 'radium';

import data from './static';

import style from './style/fontPicker';
import {item as itemStyle} from './style/controlBar';

@radium
export default class FontPicker extends React.Component {
  static propTypes = {
    ctx: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      width: data.defaultWidth
    };

    this.changeWidth = this.changeWidth.bind(this);
  }

  render() {
    const {width} = this.state;

    return (
      <div style={[itemStyle, style.root]}>
        <div style={style.text}>SIZE：</div>
        <input value={width}
               style={style.input}
               onChange={this.changeWidth}
               onBlur={this.changeWidth}
               maxLength={2}
        />
      </div>
    );
  }

  changeWidth(e) {
    const {ctx} = this.props;
    let width = parseInt(e.target.value);

    if(isNaN(width))
      width = '';

    if(e.type === 'blur' && width === '')
      width = 1;

    ctx.lineWidth = width;
    this.setState({width});
  }
}
