'use strict';

import React from 'react';

import ControlBar from './ControlBar';

import style from './style/drawingPad';

import data from './static';

export default class DrawingPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ctx: {},
      isPainted: false
    };

    this.mouse = {
      x: 0,
      y: 0
    };

    this.setSize = this.setSize.bind(this);
    this.startPaint = this.startPaint.bind(this);
    this.stopPaint = this.stopPaint.bind(this);
    this.paint = this.paint.bind(this);
    this.getMousePosition = this.getMousePosition.bind(this);
    this.getNode = this.getNode.bind(this);
  }

  componentDidMount() {
    const ctx = this.node.getContext('2d');
    this.setSize();

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = data.defaultColor;
    ctx.lineWidth = data.defaultWidth;

    this.setState({ctx});
  }

  render() {
    const {ctx} = this.state;

    return (
      <div style={style.root}>
        <ControlBar ctx={ctx}
                    canvas={this.node || {}}
        />
        <div style={style.container}>
          <canvas ref={this.getNode}
                  style={style.pad}
                  {...this.props}
                  onMouseMove={this.paint}
                  onMouseDown={this.startPaint}
                  onMouseUp={this.stopPaint}
          ></canvas>
        </div>
      </div>
    );
  }

  setSize() {
    this.node.width = this.node.parentNode.offsetWidth;
    this.node.height = this.node.parentNode.offsetHeight;
  }

  startPaint(e) {
    const {ctx} = this.state;

    this.getMousePosition(e);
    ctx.beginPath();
    ctx.moveTo(this.mouse.x, this.mouse.y);

    this.setState({isPainted: true});
  }

  stopPaint() {
    const {ctx} = this.state;

    ctx.closePath();
    ctx.save();
    this.setState({isPainted: false});
  }

  paint(e) {
    const {ctx, isPainted} = this.state;

    if(isPainted) {
      this.getMousePosition(e);
      ctx.lineTo(this.mouse.x, this.mouse.y);
      ctx.stroke();
    }
  }

  getMousePosition(e) {
    this.mouse = {
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop
    };
  }

  getNode(node) {
    this.node = node;
  }
}
