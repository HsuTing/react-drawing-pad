'use strict';

export default {
  root: {
    display: 'inline-block',
    width: '85px',
    textAlign: 'center'
  },

  icon: {
    margin: '0px 5px'
  },

  input: (style = {}) => {
    const color = style.color;

    return {
      display: 'inline-block',
      width: '19px',
      height: '100%',
      padding: '0px 5px',
      border: color ? `solid 1px ${color}` : 'solid 1px white',
      borderRadius: '5px',
      outline: '0px',
      background: 'initial',
      color: 'inherit',
      fontSize: 'inherit',
      letterSpacing: 'inherit',
      lineHeight: 'inherit'
    }
  }
};
