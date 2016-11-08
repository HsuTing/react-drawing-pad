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

var _ColorPicker = require('./ColorPicker');

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

var _FontPicker = require('./FontPicker');

var _FontPicker2 = _interopRequireDefault(_FontPicker);

var _Delete = require('./Delete');

var _Delete2 = _interopRequireDefault(_Delete);

var _Save = require('./Save');

var _Save2 = _interopRequireDefault(_Save);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _controlBar = require('./style/controlBar');

var _controlBar2 = _interopRequireDefault(_controlBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlBar = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ControlBar, _React$Component);

  function ControlBar() {
    _classCallCheck(this, ControlBar);

    return _possibleConstructorReturn(this, (ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).apply(this, arguments));
  }

  _createClass(ControlBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          ctx = _props.ctx,
          canvas = _props.canvas,
          items = _props.items,
          defaultColor = _props.defaultColor,
          defaultSize = _props.defaultSize,
          props = _objectWithoutProperties(_props, ['ctx', 'canvas', 'items', 'defaultColor', 'defaultSize']);

      return _react2.default.createElement(
        'div',
        _extends({ style: [_controlBar2.default, this.props.style]
        }, props),
        items.map(function (item, index) {
          switch (item) {
            case 'font':
              return _react2.default.createElement(_FontPicker2.default, { ctx: ctx,
                defaultSize: defaultSize,
                key: index
              });

            case 'color':
              return _react2.default.createElement(_ColorPicker2.default, { ctx: ctx,
                defaultColor: defaultColor,
                key: index
              });

            case 'delete':
              return _react2.default.createElement(_Delete2.default, { ctx: ctx,
                canvas: canvas,
                key: index
              });

            case 'save':
              return _react2.default.createElement(_Save2.default, { canvas: canvas,
                key: index
              });

            case 'image':
              return _react2.default.createElement(_Image2.default, { canvas: canvas,
                key: index
              });

            default:
              return _react2.default.cloneElement(item, {
                ctx: ctx,
                canvas: canvas,
                key: index
              });
          }
        })
      );
    }
  }]);

  return ControlBar;
}(_react2.default.Component), _class2.propTypes = {
  ctx: _react2.default.PropTypes.object.isRequired,
  canvas: _react2.default.PropTypes.object.isRequired,
  items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element])).isRequired,
  style: _react2.default.PropTypes.object,
  defaultColor: _react2.default.PropTypes.string,
  defaultSize: _react2.default.PropTypes.number
}, _class2.defaultProps = {
  ctx: {},
  canvas: {},
  items: []
}, _temp)) || _class;

exports.default = ControlBar;