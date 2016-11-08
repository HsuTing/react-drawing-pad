'use strict';

import React from 'react';
import Radium from 'radium';

import style from './style/drawingPad';

import data from './static';

@Radium
export default class DrawingPad extends React.Component {
  static propTypes = {
    defaultColor: React.PropTypes.string,
    defaultSize: React.PropTypes.number,
    getCanvas: React.PropTypes.func,
    container: React.PropTypes.object,
    style: React.PropTypes.object,
    children: React.PropTypes.node
  }

  static defaultProps = {
    getCanvas: () => {}
  }

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
    const {getCanvas, defaultColor, defaultSize} = this.props;
    const ctx = this.node.getContext('2d');

    this.setSize();
    getCanvas({ctx, canvas: this.node});

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = defaultColor || data.defaultColor;
    ctx.lineWidth = defaultSize || data.defaultWidth;

    this.setState({ctx});
  }

  render() {
    const {ctx} = this.state;
    const {container, defaultColor, defaultSize, ...props} = this.props;

    delete props.getCanvas;

    return (
      <div style={style.root}>
        {React.Children.map(this.props.children, node => {
          return React.cloneElement(node, {
            ctx,
            canvas: this.node,
            defaultColor,
            defaultSize
          });
        })}
        <div style={[style.container, container]}>
          <canvas ref={this.getNode}
                  {...props}
                  style={[style.pad, this.props.style]}
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
