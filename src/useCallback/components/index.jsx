import propTypes from 'prop-types'
import React from 'react';

const Button = React.memo(function Button({ handleClick }) {
  console.log('Button renderizou');
  return <button onClick={() => handleClick()}>+</button>
});

Button.prototype = {
  incrementButton: propTypes.func,
};

export default Button;