'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Style = require('../share/Style');

var _Style2 = _interopRequireDefault(_Style);

var _Pad = require('./Pad');

var _Pad2 = _interopRequireDefault(_Pad);

var _Color = require('./button/Color');

var _Color2 = _interopRequireDefault(_Color);

var _Delete = require('./button/Delete');

var _Delete2 = _interopRequireDefault(_Delete);

var _Save = require('./button/Save');

var _Save2 = _interopRequireDefault(_Save);

var _Image = require('./button/Image');

var _Image2 = _interopRequireDefault(_Image);

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: _index2.default.root },
        _react2.default.createElement(_Style2.default, null),
        _react2.default.createElement(
          _Pad2.default,
          { style: _index2.default.pad },
          _react2.default.createElement(
            'div',
            { style: _index2.default.control },
            _react2.default.createElement(_Color2.default, null),
            _react2.default.createElement(_Delete2.default, null),
            _react2.default.createElement(_Save2.default, null),
            _react2.default.createElement(_Image2.default, null)
          ),
          _react2.default.createElement('canvas', { style: _index2.default.canvas })
        )
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;