'use strict';

import React from 'react';
import DeleteIcon from 'react-icons/lib/md/delete';

import style from './style/delete';
import {item as itemStyle} from './style/controlBar';

export default class Delete extends React.Component {
  static propTypes = {
    ctx: React.PropTypes.object.isRequired,
    canvas: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.clear = this.clear.bind(this);
  }

  render() {
    return (
      <div style={itemStyle}>
        <DeleteIcon style={style}
                    onClick={this.clear}
        />
      </div>
    );
  }

  clear() {
    const {ctx, canvas} = this.props;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
