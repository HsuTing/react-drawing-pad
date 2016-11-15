'use strict';

import React from 'react';
import radium from 'radium';
import DownloadIcon from 'react-icons/lib/md/file-download';
import {saveAs} from 'file-saver';
import convertStyle from 'utils/convertStyle';

import itemStyle from './style/item';

@radium
export default class Save extends React.Component {
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
      <DownloadIcon {...props}
                    style={convertStyle([itemStyle, style])}
                    onClick={this.save}
      />
    );
  }

  save() {
    const {canvas} = this.context.getCanvas();

    canvas.toBlob(blob => {
      saveAs(blob, 'image.png');
    });
  }
}
