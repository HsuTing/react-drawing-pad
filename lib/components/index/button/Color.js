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

var _reactColor = require('react-color');

var _item = require('./style/item');

var _item2 = _interopRequireDefault(_item);

var _color = require('./style/color');

var _color2 = _interopRequireDefault(_color);

var _static = require('./static.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Color = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Color, _React$Component);

  function Color(props) {
    _classCallCheck(this, Color);

    var _this = _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).call(this, props));

    _this.state = {
      isShow: false,
      chooseColor: _this.props.defaultColor || _static.defaultColor
    };

    _this.togglePicker = _this.togglePicker.bind(_this);
    _this.showPicker = _this.togglePicker(true).bind(_this);
    _this.hidePicker = _this.togglePicker(false).bind(_this);
    _this.changeColor = _this.changeColor.bind(_this);
    _this.convertColor = _this.convertColor.bind(_this);
    return _this;
  }

  _createClass(Color, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _context$getCanvas = this.context.getCanvas(),
          ctx = _context$getCanvas.ctx;

      var chooseColor = this.state.chooseColor;


      ctx.strokeStyle = chooseColor;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isShow = _state.isShow,
          chooseColor = _state.chooseColor;

      var _props = this.props,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['style']);

      delete props.defaultColor;

      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          style: [_item2.default, _color2.default.root, style]
        }),
        _react2.default.createElement(
          'div',
          { style: _color2.default.button },
          _react2.default.createElement('div', { style: _color2.default.chooseColor(this.convertColor(chooseColor)),
            onClick: this.showPicker
          })
        ),
        isShow ? _react2.default.createElement(
          'div',
          { style: _color2.default.picker },
          _react2.default.createElement('div', { style: _color2.default.cover,
            onClick: this.hidePicker
          }),
          _react2.default.createElement(_reactColor.ChromePicker, { color: chooseColor,
            onChange: this.changeColor
          })
        ) : null
      );
    }
  }, {
    key: 'togglePicker',
    value: function togglePicker(isShow) {
      var _this2 = this;

      return function () {
        _this2.setState({ isShow: isShow });
      };
    }
  }, {
    key: 'changeColor',
    value: function changeColor(color) {
      var _context$getCanvas2 = this.context.getCanvas(),
          ctx = _context$getCanvas2.ctx;

      ctx.strokeStyle = this.convertColor(color.rgb);
      this.setState({ chooseColor: color.rgb });
    }
  }, {
    key: 'convertColor',
    value: function convertColor(color) {
      if (color instanceof Object) return 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + color.a + ')';
      return color;
    }
  }]);

  return Color;
}(_react2.default.Component), _class2.contextTypes = {
  getCanvas: _react2.default.PropTypes.func.isRequired
}, _class2.propTypes = {
  style: _react2.default.PropTypes.object,
  defaultColor: _react2.default.PropTypes.string
}, _temp)) || _class;

exports.default = Color;