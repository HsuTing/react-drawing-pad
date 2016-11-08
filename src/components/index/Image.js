'use strict';

import React from 'react';
import radium from 'radium';
import ImageIcon from 'react-icons/lib/md/image';

import style from './style/icon';
import {item as itemStyle} from './style/controlBar';

@radium
export default class Image extends React.Component {
  static propTypes = {
    canvas: React.PropTypes.object.isRequired,
    style: React.PropTypes.object,
    icon: React.PropTypes.object
  }

  constructor(props) {
    super(props);

    this.save = this.save.bind(this);
  }

  render() {
    const props = {...this.props};

    delete props.canvas;

    return (
      <div {...props}
            style={[itemStyle, this.props.style]}
      >
        <ImageIcon style={Object.assign(style, this.props.icon)}
                      onClick={this.save}
        />
      </div>
    );
  }

  save() {
    const {canvas} = this.props;
    const dataURL = canvas.toDataURL('image/png');
    const newWindow = window.open();
    newWindow.document.write(`<img src="${dataURL}" />`);
  }
}
