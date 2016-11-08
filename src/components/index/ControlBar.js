'use strict';

import React from 'react';
import radium from 'radium';

import ColorPicker from './ColorPicker';
import FontPicker from './FontPicker';
import Delete from './Delete';
import Save from './Save';
import Image from './Image';

import style from './style/controlBar';

@radium
export default class ControlBar extends React.Component {
  static propTypes = {
    ctx: React.PropTypes.object.isRequired,
    canvas: React.PropTypes.object.isRequired,
    items: React.PropTypes.arrayOf(
      React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element
      ])
    ).isRequired,
    style: React.PropTypes.object,
    defaultColor: React.PropTypes.string,
    defaultSize: React.PropTypes.number
  }

  static defaultProps = {
    ctx: {},
    canvas: {},
    items: []
  }

  render() {
    const {ctx, canvas, items, defaultColor, defaultSize, ...props} = this.props;

    return (
      <div style={[style, this.props.style]}
           {...props}
      >
        {items.map((item, index) => {
          switch(item) {
            case 'font':
              return (
                <FontPicker ctx={ctx}
                            defaultSize={defaultSize}
                            key={index}
                />
              );

            case 'color':
              return (
                <ColorPicker ctx={ctx}
                             defaultColor={defaultColor}
                             key={index}
                />
              );

            case 'delete':
              return (
                <Delete ctx={ctx}
                        canvas={canvas}
                        key={index}
                />
              );

            case 'save':
              return (
                <Save canvas={canvas}
                      key={index}
                />
              );

            case 'image':
              return (
                <Image canvas={canvas}
                       key={index}
                />
              );

            default:
              return React.cloneElement(item, {
                ctx,
                canvas,
                key: index
              });
          }
        })}
      </div>
    );
  }
}
