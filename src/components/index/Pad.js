'use strict';

import React from 'react';
import invariant from 'invariant';

export default class Pad extends React.Component {
  static childContextTypes = {
    getCanvas: React.PropTypes.func.isRequired
  }

  static propTypes = {
    defaultColor: React.PropTypes.string,
    defaultSize: React.PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      isPainted: false
    };

    this.mouse = {
      x: 0,
      y: 0
    };

    this.getNode = this.getNode.bind(this);
    this.getCanvas = this.getCanvas.bind(this);
    this.setDefaultSetting = this.setDefaultSetting.bind(this);
    this.addEventToCanvas = this.addEventToCanvas.bind(this);
    this.startPaint = this.startPaint.bind(this);
    this.stopPaint = this.stopPaint.bind(this);
    this.paint = this.paint.bind(this);
    this.getMousePosition = this.getMousePosition.bind(this);
  }

  componentDidMount() {
    this.canvas = this.node.querySelector('canvas');
    invariant(this.canvas, 'No canvas is found.');

    this.ctx = this.canvas.getContext('2d');
    this.setDefaultSetting();
    this.addEventToCanvas();
  }

  getChildContext() {
    return {
      getCanvas: this.getCanvas
    };
  }

  render() {
    const props = {...this.props};

    delete props.defaultColor;

    return (
      <div {...props}
           ref={this.getNode}
      />
    );
  }

  getNode(node) {
    this.node = node;
  }

  getCanvas() {
    return {
      canvas: this.canvas,
      ctx: this.ctx
    };
  }

  setDefaultSetting() {
    const {canvas, ctx} = this;
    const {defaultColor, defaultSize} = this.props;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    ctx.strokeStyle = defaultColor || 'black';
    ctx.lineWidth = defaultSize || 1;
  }

  addEventToCanvas() {
    const {canvas} = this;

    canvas.addEventListener('mousemove', this.paint);
    canvas.addEventListener('mousedown', this.startPaint);
    canvas.addEventListener('mouseup', this.stopPaint);
  }

  startPaint(e) {
    const {ctx} = this;

    this.getMousePosition(e);
    ctx.beginPath();
    ctx.moveTo(this.mouse.x, this.mouse.y);

    this.setState({isPainted: true});
  }

  stopPaint() {
    const {ctx} = this;

    ctx.closePath();
    this.setState({isPainted: false});
  }

  paint(e) {
    const {ctx} = this;
    const {isPainted} = this.state;

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
}
