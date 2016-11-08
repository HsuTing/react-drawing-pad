'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  root: {
    width: '100%',
    height: '100%'
  },

  pad: {
    width: '100%',
    height: '100%',
    margin: '20px 0px',
    background: _color2.default.grey,
    cursor: 'pointer'
  },

  container: {
    width: '100%',
    height: 'calc(100% - 50px - 20px * 2)'
  }
};