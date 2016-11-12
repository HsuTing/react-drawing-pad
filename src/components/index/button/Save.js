'use strict';

import React from 'react';
import radium from 'radium';
import DownloadIcon from 'react-icons/lib/md/file-download';
import {saveAs} from 'file-saver';

import itemStyle from './style/item';

@radium
export default class Save extends React.Component {
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
      <DownloadIcon {...props}
                    style={Object.assign({}, itemStyle, style)}
                    onClick={this.save}
      />
    );
  }

  save() {
    const {canvas} = this.context.canvas;

    canvas.toBlob(blob => {
      saveAs(blob, 'image.png');
    });
  }
}
