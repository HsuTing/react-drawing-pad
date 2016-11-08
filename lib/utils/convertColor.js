'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (color) {
  if (color instanceof Object) return 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + color.a + ')';
  return color;
};