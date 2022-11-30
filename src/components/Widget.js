import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  icon: PropTypes.node,
};

/**
 * Виджеты в нижней части страницы
 */
const Widget = ({ title, url, icon, children }) => {
  const iconWrapper = icon && (
    <span className="widget__icon">{icon}</span>
  );

  return (
    <article className="widget">
      <a className="widget__title" href={url}>
        {title} {iconWrapper}
      </a>
      {children}
    </article>
  );
};

Widget.propTypes = propTypes;

export default Widget;
