'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  button: {
    width: '35px',
    height: 'calc(100% - 5px * 2 - 1px * 2)',
    padding: '5px',
    border: 'solid 1px ' + _color2.default.grey,
    borderRadius: '5px',
    background: 'white',
    cursor: 'pointer'
  },

  chooseColor: function chooseColor(_chooseColor) {
    return {
      width: '100%',
      height: '100%',
      background: _chooseColor
    };
  },

  picker: {
    position: 'relative',
    width: '0px',
    height: '0px',
    top: '5px',
    zIndex: '1'
  },

  cover: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px'
  }
};