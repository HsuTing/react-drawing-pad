'use strict';

import React from 'react';
import radium from 'radium';
import ImageIcon from 'react-icons/lib/md/image';

import itemStyle from './style/item';

@radium
export default class Image extends React.Component {
  static contextTypes = {
    canvas: React.PropTypes.object.isRequired
  }

  static propTypes = {
    style: React.PropTypes.object
  }

  constructor(props) {
    super(props);

    this.save = this.save.bind(this);
  }

  render() {
    const {style, ...props} = this.props;

    return (
      <ImageIcon {...props}
                 style={Object.assign({}, itemStyle, style)}
                 onClick={this.save}
      />
    );
  }

  save() {
    const {canvas} = this.context.canvas;
    const dataURL = canvas.toDataURL('image/png');
    const newWindow = window.open();
    newWindow.document.write(`<img src="${dataURL}" />`);
  }
}
