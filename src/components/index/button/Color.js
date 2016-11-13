'use strict';

import React from 'react';
import radium from 'radium';
import {ChromePicker} from 'react-color';

import itemStyle from './style/item';
import colorStyle from './style/color';

import {defaultColor} from './static.js';

@radium
export default class Color extends React.Component {
  static contextTypes = {
    canvas: React.PropTypes.object.isRequired
  }

  static propTypes = {
    style: React.PropTypes.object,
    defaultColor: React.PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      chooseColor: this.props.defaultColor || defaultColor
    };

    this.togglePicker = this.togglePicker.bind(this);
    this.showPicker = this.togglePicker(true).bind(this);
    this.hidePicker = this.togglePicker(false).bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.convertColor = this.convertColor.bind(this);
  }

  componentDidUpdate() {
    const {ctx} = this.context.canvas;
    const {chooseColor} = this.state;

    ctx.strokeStyle = chooseColor;
  }

  render() {
    const {isShow, chooseColor} = this.state;
    const {style, ...props} = this.props;

    delete props.defaultColor;

    return (
      <div {...props}
           style={[itemStyle, colorStyle.root, style]}
      >
        <div style={colorStyle.button}>
          <div style={colorStyle.chooseColor(this.convertColor(chooseColor))}
               onClick={this.showPicker}
           />
         </div>
        {isShow ?
          <div style={colorStyle.picker}>
            <div style={colorStyle.cover}
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
    const {ctx} = this.context.canvas;

    ctx.strokeStyle = this.convertColor(color.rgb);
    this.setState({chooseColor: color.rgb});
  }

  convertColor(color) {
    if(color instanceof Object)
      return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    return color;
  }
}
