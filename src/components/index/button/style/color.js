'use strict';

import color from 'color';

export default {
  button: {
    width: '35px',
    height: 'calc(100% - 5px * 2 - 1px * 2)',
    padding: '5px',
    border: `solid 1px ${color.grey}`,
    borderRadius: '5px',
    background: 'white',
    cursor: 'pointer'
  },

  chooseColor: chooseColor => {
    return {
      width: '100%',
      height: '100%',
      background: chooseColor
    };
  },

  picker: {
    position: 'relative',
    width: '0px',
    height: '0px',
    top: '5px',
    zIndex: '1'
  },

  cover: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px'
  }
};
