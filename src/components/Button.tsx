import React from 'react';

export const Button = props => {
  console.log('button is rerendering');
  return <button {...props} />;
};
