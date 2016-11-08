'use strict';

import React from 'react';
import {ChromePicker} from 'react-color';

import convertColor from 'utils/convertColor';

import style from './style/colorPicker';
import {item as itemStyle} from './style/controlBar';

import data from './static.js';

export default class ColorPicker extends React.Component {
  static propTypes = {
    ctx: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      chooseColor: data.defaultColor
    };

    this.togglePicker = this.togglePicker.bind(this);
    this.showPicker = this.togglePicker(true).bind(this);
    this.hidePicker = this.togglePicker(false).bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  render() {
    const {isShow, chooseColor} = this.state;

    return (
      <div style={itemStyle}>
        <div style={style.button}
             onClick={this.showPicker}
        >
          <div style={style.chooseColor(convertColor(chooseColor))} />
        </div>
        {isShow ?
          <div style={style.picker}>
            <div style={style.cover}
                 onClick={this.hidePicker}
            ></div>
            <ChromePicker color={chooseColor}
                          onChange={this.changeColor}
            />
          </div>: null
        }
      </div>
    );
  }

  togglePicker(isShow) {
    return () => {
      this.setState({isShow});
    };
  }

  changeColor(color) {
    const {ctx} = this.props;

    ctx.strokeStyle = convertColor(color.rgb);
    this.setState({chooseColor: color.rgb});
  }
}
