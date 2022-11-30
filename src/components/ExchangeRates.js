import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  rates: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      delta: PropTypes.string.isRequired,
    })
  ).isRequired,
};

/**
 * Курсы валют и нефти между новостями и поиском
 */
const ExchangeRates = ({ rates }) => {
  const items = rates.map(({ title, value, delta }) => (
    <li key={title} className="rates__item">
      <span className='rates__title'>{title}</span>
      <span className='rates__value'>{value}</span>
      <span className='rates__delta'>{delta}</span>
    </li>
  ));

  return <ul className="rates">{items}</ul>;
};

ExchangeRates.propTypes = propTypes;

export default ExchangeRates;
