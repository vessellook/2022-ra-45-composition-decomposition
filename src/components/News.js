import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  time: PropTypes.string,
};

const News = ({ lists, time }) => {
  const [currentList, setCurrentList] = useState(lists[0]);
  const handleTitleClick = (index) => {
    setCurrentList(lists[index]);
  };

  const titles = lists.map(({ title }, index) => (
    <span
      key={title}
      className={classNames('news__title', {
        news__title_current: title === currentList?.title,
      })}
      onClick={() => handleTitleClick(index)}
    >
      {title}
    </span>
  ));

  const items = currentList?.items?.map(({ icon, text, url }) => (
    <li key={url} className="news__item">
      <a className="news__link" href={url}>
        <img className="news__icon" src={icon} alt='' />
        {text}
      </a>
    </li>
  ));

  return (
    <div className="news">
      <div className="news__header">
        {titles} <span className="news__time">{time}</span>
      </div>
      <ul className="news__body">{items}</ul>
    </div>
  );
};

News.propTypes = propTypes;

export default News;
