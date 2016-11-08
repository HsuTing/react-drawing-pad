'use strict';

import color from 'color';

export default {
  root: {
    width: '100%',
    height: '100%'
  },

  pad: {
    width: '100%',
    height: '100%',
    margin: '20px 0px',
    background: color.grey,
    cursor: 'pointer'
  },

  container: {
    width: '100%',
    height: 'calc(100% - 50px - 20px * 2)'
  }
};
