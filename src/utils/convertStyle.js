'use strict';

export default styles => {
  if(styles instanceof Array) {
    let output = {};

    styles.forEach(style => {
      if(style instanceof Array)
        style.forEach(childStyle => {
          Object.assign(output, childStyle);
        });
      else
        Object.assign(output, style);
    });

    return output;
  }

  return styles;
};
