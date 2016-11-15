'use strict';

import React from 'react';
import radium from 'radium';
import ImageIcon from 'react-icons/lib/md/image';
import convertStyle from 'utils/convertStyle';

import itemStyle from './style/item';

@radium
export default class Image extends React.Component {
  static contextTypes = {
    getCanvas: React.PropTypes.func.isRequired
  }

  static propTypes = {
    style: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ])
  }

  constructor(props) {
    super(props);

    this.save = this.save.bind(this);
  }

  render() {
    const {style, ...props} = this.props;

    return (
      <ImageIcon {...props}
                 style={convertStyle([itemStyle, style])}
                 onClick={this.save}
      />
    );
  }

  save() {
    const {canvas} = this.context.getCanvas();
    const dataURL = canvas.toDataURL('image/png');
    const newWindow = window.open();
    newWindow.document.write(`<img src="${dataURL}" />`);
  }
}
