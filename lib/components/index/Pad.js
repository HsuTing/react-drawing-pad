'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pad = (_temp = _class = function (_React$Component) {
  _inherits(Pad, _React$Component);

  function Pad(props) {
    _classCallCheck(this, Pad);

    var _this = _possibleConstructorReturn(this, (Pad.__proto__ || Object.getPrototypeOf(Pad)).call(this, props));

    _this.state = {
      isPainted: false
    };

    _this.mouse = {
      x: 0,
      y: 0
    };

    _this.getNode = _this.getNode.bind(_this);
    _this.setDefaultSetting = _this.setDefaultSetting.bind(_this);
    _this.addEventToCanvas = _this.addEventToCanvas.bind(_this);
    _this.startPaint = _this.startPaint.bind(_this);
    _this.stopPaint = _this.stopPaint.bind(_this);
    _this.paint = _this.paint.bind(_this);
    _this.getMousePosition = _this.getMousePosition.bind(_this);
    return _this;
  }

  _createClass(Pad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.canvas = this.node.querySelector('canvas');
      (0, _invariant2.default)(this.canvas, 'No canvas is found.');

      this.ctx = this.canvas.getContext('2d');
      this.setDefaultSetting();
      this.addEventToCanvas();
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        canvas: {
          canvas: this.canvas,
          ctx: this.ctx
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props);

      delete props.defaultColor;

      return _react2.default.createElement('div', _extends({}, props, {
        ref: this.getNode
      }));
    }
  }, {
    key: 'getNode',
    value: function getNode(node) {
      this.node = node;
    }
  }, {
    key: 'setDefaultSetting',
    value: function setDefaultSetting() {
      var canvas = this.canvas,
          ctx = this.ctx;
      var defaultColor = this.props.defaultColor;


      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      ctx.strokeStyle = defaultColor || 'black';
    }
  }, {
    key: 'addEventToCanvas',
    value: function addEventToCanvas() {
      var canvas = this.canvas;


      canvas.addEventListener('mousemove', this.paint);
      canvas.addEventListener('mousedown', this.startPaint);
      canvas.addEventListener('mouseup', this.stopPaint);
    }
  }, {
    key: 'startPaint',
    value: function startPaint(e) {
      var ctx = this.ctx;


      this.getMousePosition(e);
      ctx.beginPath();
      ctx.moveTo(this.mouse.x, this.mouse.y);

      this.setState({ isPainted: true });
    }
  }, {
    key: 'stopPaint',
    value: function stopPaint() {
      var ctx = this.ctx;


      ctx.closePath();
      this.setState({ isPainted: false });
    }
  }, {
    key: 'paint',
    value: function paint(e) {
      var ctx = this.ctx;
      var isPainted = this.state.isPainted;


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
  }]);

  return Pad;
}(_react2.default.Component), _class.childContextTypes = {
  canvas: _react2.default.PropTypes.object.isRequired
}, _class.propTypes = {
  defaultColor: _react2.default.PropTypes.string
}, _temp);
exports.default = Pad;