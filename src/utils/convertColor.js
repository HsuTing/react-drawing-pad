'use strict';

export default color => {
  if(color instanceof Object)
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  return color;
};
