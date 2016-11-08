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

var _fileDownload = require('react-icons/lib/md/file-download');

var _fileDownload2 = _interopRequireDefault(_fileDownload);

var _fileSaver = require('file-saver');

var _icon = require('./style/icon');

var _icon2 = _interopRequireDefault(_icon);

var _controlBar = require('./style/controlBar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Save = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Save, _React$Component);

  function Save(props) {
    _classCallCheck(this, Save);

    var _this = _possibleConstructorReturn(this, (Save.__proto__ || Object.getPrototypeOf(Save)).call(this, props));

    _this.save = _this.save.bind(_this);
    return _this;
  }

  _createClass(Save, [{
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props);

      delete props.canvas;

      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          style: [_controlBar.item, this.props.style]
        }),
        _react2.default.createElement(_fileDownload2.default, { style: _extends(_icon2.default, this.props.icon),
          onClick: this.save
        })
      );
    }
  }, {
    key: 'save',
    value: function save() {
      var canvas = this.props.canvas;


      canvas.toBlob(function (blob) {
        (0, _fileSaver.saveAs)(blob, 'image.png');
      });
    }
  }]);

  return Save;
}(_react2.default.Component), _class2.propTypes = {
  canvas: _react2.default.PropTypes.object.isRequired,
  style: _react2.default.PropTypes.object,
  icon: _react2.default.PropTypes.object
}, _temp)) || _class;

exports.default = Save;