import React from 'react';

const Subtitle = ({ subtitle, className = '' }) => {
  // Default to 'section__subtitle' if no custom className is provided
  const classes = className ? className : 'section__subtitle';

  return (
    <h3 className={classes}>
      {subtitle}
    </h3>
  );
};

export default Subtitle;