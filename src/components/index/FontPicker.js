'use strict';

import React from 'react';
import radium from 'radium';

import data from './static';

import style from './style/fontPicker';
import {item as itemStyle} from './style/controlBar';

@radium
export default class FontPicker extends React.Component {
  static propTypes = {
    ctx: React.PropTypes.object.isRequired,
    defaultSize: React.PropTypes.number,
    style: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      size: this.props.defaultSize || data.defaultSize
    };

    this.changeSize = this.changeSize.bind(this);
  }

  render() {
    const {size} = this.state;
    const props = {...this.props};

    delete props.ctx;
    delete props.defaultSize

    return (
      <div {...props}
           style={[itemStyle, style.root, this.props.style]}
      >
        <div style={style.text}>SIZE：</div>
        <input value={size}
               style={style.input}
               onChange={this.changeSize}
               onBlur={this.changeSize}
               maxLength={2}
        />
      </div>
    );
  }

  changeSize(e) {
    const {ctx} = this.props;
    let size = parseInt(e.target.value);

    if(isNaN(size))
      size = '';

    if(e.type === 'blur' && size === '')
      size = 1;

    ctx.lineWidth = size;
    this.setState({size});
  }
}
