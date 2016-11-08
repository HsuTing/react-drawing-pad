'use strict';

import React from 'react';
import radium from 'radium';
import DeleteIcon from 'react-icons/lib/md/delete';

import style from './style/delete';
import {item as itemStyle} from './style/controlBar';

@radium
export default class Delete extends React.Component {
  static propTypes = {
    ctx: React.PropTypes.object.isRequired,
    canvas: React.PropTypes.object.isRequired,
    style: React.PropTypes.object,
    icon: React.PropTypes.object
  }

  constructor(props) {
    super(props);

    this.clear = this.clear.bind(this);
  }

  render() {
    const props = {...this.props};

    delete props.ctx;
    delete props.canvas;
    delete props.icon;

    return (
      <div {...props}
            style={[itemStyle, this.props.style]}
      >
        <DeleteIcon style={Object.assign(style, this.props.icon)}
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
