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

var _drawingPad = require('./style/drawingPad');

var _drawingPad2 = _interopRequireDefault(_drawingPad);

var _static = require('./static');

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrawingPad = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(DrawingPad, _React$Component);

  function DrawingPad(props) {
    _classCallCheck(this, DrawingPad);

    var _this = _possibleConstructorReturn(this, (DrawingPad.__proto__ || Object.getPrototypeOf(DrawingPad)).call(this, props));

    _this.state = {
      ctx: {},
      isPainted: false
    };

    _this.mouse = {
      x: 0,
      y: 0
    };

    _this.setSize = _this.setSize.bind(_this);
    _this.startPaint = _this.startPaint.bind(_this);
    _this.stopPaint = _this.stopPaint.bind(_this);
    _this.paint = _this.paint.bind(_this);
    _this.getMousePosition = _this.getMousePosition.bind(_this);
    _this.getNode = _this.getNode.bind(_this);
    return _this;
  }

  _createClass(DrawingPad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          getCanvas = _props.getCanvas,
          defaultColor = _props.defaultColor,
          defaultSize = _props.defaultSize;

      var ctx = this.node.getContext('2d');

      this.setSize();
      getCanvas({ ctx: ctx, canvas: this.node });

      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = defaultColor || _static2.default.defaultColor;
      ctx.lineWidth = defaultSize || _static2.default.defaultWidth;

      this.setState({ ctx: ctx });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var ctx = this.state.ctx;

      var _props2 = this.props,
          container = _props2.container,
          defaultColor = _props2.defaultColor,
          defaultSize = _props2.defaultSize,
          props = _objectWithoutProperties(_props2, ['container', 'defaultColor', 'defaultSize']);

      delete props.getCanvas;

      return _react2.default.createElement(
        'div',
        { style: _drawingPad2.default.root },
        _react2.default.Children.map(this.props.children, function (node) {
          return _react2.default.cloneElement(node, {
            ctx: ctx,
            canvas: _this2.node,
            defaultColor: defaultColor,
            defaultSize: defaultSize
          });
        }),
        _react2.default.createElement(
          'div',
          { style: [_drawingPad2.default.container, container] },
          _react2.default.createElement('canvas', _extends({ ref: this.getNode
          }, props, {
            style: [_drawingPad2.default.pad, this.props.style],
            onMouseMove: this.paint,
            onMouseDown: this.startPaint,
            onMouseUp: this.stopPaint
          }))
        )
      );
    }
  }, {
    key: 'setSize',
    value: function setSize() {
      this.node.width = this.node.parentNode.offsetWidth;
      this.node.height = this.node.parentNode.offsetHeight;
    }
  }, {
    key: 'startPaint',
    value: function startPaint(e) {
      var ctx = this.state.ctx;


      this.getMousePosition(e);
      ctx.beginPath();
      ctx.moveTo(this.mouse.x, this.mouse.y);

      this.setState({ isPainted: true });
    }
  }, {
    key: 'stopPaint',
    value: function stopPaint() {
      var ctx = this.state.ctx;


      ctx.closePath();
      this.setState({ isPainted: false });
    }
  }, {
    key: 'paint',
    value: function paint(e) {
      var _state = this.state,
          ctx = _state.ctx,
          isPainted = _state.isPainted;


      if (isPainted) {
        this.getMousePosition(e);
        ctx.lineTo(this.mouse.x, this.mouse.y);
        ctx.stroke();
      }
    }
  }, {
    key: 'getMousePosition',
    value: function getMousePosition(e) {
      this.mouse = {
        x: e.pageX - e.target.offsetLeft,
        y: e.pageY - e.target.offsetTop
      };
    }
  }, {
    key: 'getNode',
    value: function getNode(node) {
      this.node = node;
    }
  }]);

  return DrawingPad;
}(_react2.default.Component), _class2.propTypes = {
  defaultColor: _react2.default.PropTypes.string,
  defaultSize: _react2.default.PropTypes.number,
  getCanvas: _react2.default.PropTypes.func,
  container: _react2.default.PropTypes.object,
  style: _react2.default.PropTypes.object,
  children: _react2.default.PropTypes.node
}, _class2.defaultProps = {
  getCanvas: function getCanvas() {}
}, _temp)) || _class;

exports.default = DrawingPad;