import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

const Advertisement = ({ title, description, imgSrc }) => {
  return (
    <div className="ad">
      <img className="ad__img" src={imgSrc} alt='' />
      <div className="ad__title">{title}</div>
      <div className="ad__description">{description}</div>
    </div>
  );
};

Advertisement.propTypes = propTypes;

export default Advertisement;
