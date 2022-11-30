import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  randomQuery: PropTypes.string.isRequired,
};

/**
 * Компонент отображает поисковую строку, ссылки над ней и случайный запрос под ней
 */
const Search = ({ links, randomQuery }) => {
  const [query, setQuery] = useState();

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = 'https://yandex.ru/search/?text=' + encodeURI(query);
  };

  const visibleLinks = links.slice(0, 7).map(({ url, text }) => (
    <a key={url} className="search__link" href={url}>
      {text}
    </a>
  ));

  const allLinks = links.map(({ url, text }) => (
    <a key={url} className="search__link" href={url}>
      {text}
    </a>
  ));

  return (
    <div className="search">
      <div className="search__links">
        {visibleLinks}
        <div className="search__more-button">ещё</div>
      </div>
      <div className="search__more">{allLinks}</div>
      <form className="search__form" onSubmit={handleSubmit}>
        <img
          className="search__logo"
          src="https://yastatic.net/s3/web4static/_/v2/ILFmOIJ8woHVcXPynY5R8UCSfME.svg"
          alt="Яндекс"
        />
        <input className="search__query" onChange={handleQueryChange} />
        <button className="search__button" type="submit">
          Найти
        </button>
      </form>
      <div className="search__slogan">
        Найдётся всё. Например,
        <span className="search__random-query">{randomQuery}</span>
      </div>
    </div>
  );
};

Search.propTypes = propTypes;

export default Search;
