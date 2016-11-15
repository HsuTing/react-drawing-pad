'use strict';

import React from 'react';
import radium from 'radium';
import DeleteIcon from 'react-icons/lib/md/delete';
import convertStyle from 'utils/convertStyle';

import itemStyle from './style/item';

@radium
export default class Delete extends React.Component {
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

    this.clear = this.clear.bind(this);
  }

  render() {
    const {style, ...props} = this.props;

    return (
      <DeleteIcon {...props}
                  style={convertStyle([itemStyle, style])}
                  onClick={this.clear}
      />
    );
  }

  clear() {
    const {ctx, canvas} = this.context.getCanvas();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
