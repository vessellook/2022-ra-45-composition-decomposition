import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

/**
 * Баннер под строкой поиска
 */
const Banner = ({src, url}) => {
  return (
    <a className="banner" href={url}>
      <img className='banner__image' src={src} alt="" />
    </a>
  );
};

Banner.propTypes = propTypes;

export default Banner;
