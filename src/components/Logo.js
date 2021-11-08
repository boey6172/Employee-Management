import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/logo.png"
      {...props}
      height="50"
    />
  );
};

export default Logo;
