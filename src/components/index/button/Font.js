'use strict';

import React from 'react';
import radium from 'radium';
import Add from 'react-icons/lib/md/add';
import Remove from 'react-icons/lib/md/remove';
import convertStyle from 'utils/convertStyle';

import itemStyle from './style/item';
import fontStyle from './style/font';

import {defaultSize} from './static';

@radium
export default class Font extends React.Component {
  static contextTypes = {
    getCanvas: React.PropTypes.func.isRequired
  }

  static propTypes = {
    style: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]),
    inputStyle: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]),
    iconStyle: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]),
    defaultSize: React.PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      size: this.props.defaultSize || defaultSize
    };

    this.changeSize = this.changeSize.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidUpdate() {
    const {ctx} = this.context.getCanvas();
    const {size} = this.state;

    ctx.lineWidth = size;
  }

  render() {
    const {size} = this.state;
    const {style, inputStyle, iconStyle,  ...props} =  this.props;

    delete props.defaultSize

    return (
      <div {...props}
           style={[itemStyle, fontStyle.root, style]}
      >
        <Remove style={convertStyle([fontStyle.icon, iconStyle])}
                onClick={this.remove}
        />
        <input value={size}
               style={[fontStyle.input(style), inputStyle]}
               onChange={this.changeSize}
               onBlur={this.changeSize}
               maxLength={2}
        />
        <Add style={convertStyle([fontStyle.icon, iconStyle])}
             onClick={this.add}
        />
      </div>
    );
  }

  add() {
    const size = this.state.size + 1 > 99 ? 99 : this.state.size + 1;
    this.setState({size});
  }

  remove() {
    const size = this.state.size - 1 < 1 ? 1 : this.state.size - 1;
    this.setState({size});
  }

  changeSize(e) {
    const {ctx} = this.context.getCanvas();
    let size = parseInt(e.target.value);

    if(isNaN(size))
      size = '';

    if(e.type === 'blur' && size === '')
      size = 1;

    ctx.lineWidth = size;
    this.setState({size});
  }
}
