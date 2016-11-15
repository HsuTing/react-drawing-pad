'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _add = require('react-icons/lib/md/add');

var _add2 = _interopRequireDefault(_add);

var _remove = require('react-icons/lib/md/remove');

var _remove2 = _interopRequireDefault(_remove);

var _convertStyle = require('../../../utils/convertStyle');

var _convertStyle2 = _interopRequireDefault(_convertStyle);

var _item = require('./style/item');

var _item2 = _interopRequireDefault(_item);

var _font = require('./style/font');

var _font2 = _interopRequireDefault(_font);

var _static = require('./static');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Font = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Font, _React$Component);

  function Font(props) {
    _classCallCheck(this, Font);

    var _this = _possibleConstructorReturn(this, (Font.__proto__ || Object.getPrototypeOf(Font)).call(this, props));

    _this.state = {
      size: _this.props.defaultSize || _static.defaultSize
    };

    _this.changeSize = _this.changeSize.bind(_this);
    return _this;
  }

  _createClass(Font, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _context$getCanvas = this.context.getCanvas(),
          ctx = _context$getCanvas.ctx;

      var size = this.state.size;


      ctx.lineWidth = size;
    }
  }, {
    key: 'render',
    value: function render() {
      var size = this.state.size;

      var _props = this.props,
          style = _props.style,
          inputStyle = _props.inputStyle,
          iconStyle = _props.iconStyle,
          props = _objectWithoutProperties(_props, ['style', 'inputStyle', 'iconStyle']);

      delete props.defaultSize;

      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          style: [_item2.default, _font2.default.root, style]
        }),
        _react2.default.createElement(_remove2.default, { style: (0, _convertStyle2.default)([_font2.default.icon, iconStyle]) }),
        _react2.default.createElement('input', { value: size,
          style: [_font2.default.input(style), inputStyle],
          onChange: this.changeSize,
          onBlur: this.changeSize,
          maxLength: 2
        }),
        _react2.default.createElement(_add2.default, { style: (0, _convertStyle2.default)([_font2.default.icon, iconStyle]) })
      );
    }
  }, {
    key: 'changeSize',
    value: function changeSize(e) {
      var _context$getCanvas2 = this.context.getCanvas(),
          ctx = _context$getCanvas2.ctx;

      var size = parseInt(e.target.value);

      if (isNaN(size)) size = '';

      if (e.type === 'blur' && size === '') size = 1;

      ctx.lineWidth = size;
      this.setState({ size: size });
    }
  }]);

  return Font;
}(_react2.default.Component), _class2.contextTypes = {
  getCanvas: _react2.default.PropTypes.func.isRequired
}, _class2.propTypes = {
  style: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array]),
  inputStyle: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array]),
  iconStyle: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array]),
  defaultSize: _react2.default.PropTypes.number
}, _temp)) || _class;

exports.default = Font;