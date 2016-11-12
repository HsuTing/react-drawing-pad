'use strict';

import color from 'color';

export default {
  root: {
    width: 'calc(100vw - 40px * 2)',
    height: 'calc(100vh - 40px * 2)',
    padding: '40px'
  },

  control: {
    width: 'calc(100% - 10px * 2)',
    height: '50px',
    padding: '0px 10px',
    lineHeight: '50px',
    background: 'black',
    color: 'white'
  },

  pad: {
    width: '100%',
    height: '100%'
  },

  canvas: {
    width: '100%',
    height: 'calc(100% - 50px)',
    background: color.grey,
    cursor: 'pointer'
  }
};
