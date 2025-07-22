import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { products } from '../data/products';


const getQueryId = (query: string) => {
  const product = products.find(product => product.name === query);
  return product?.id || '';
};

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) return;

    setQuery(value);
    const filteredSuggestions = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    ).map(product => product.name);
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = () => {
    window.brweb.track('suggest_click');
    setSuggestions([]);
  };

  const handleSearchClick = () => {
    window.brweb.track('search_submit');
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />

      <NavLink to={`/en/product/${getQueryId(query)}`} onClick={() => handleSearchClick()}>
        <button className="search-button" >
          Submit
        </button>
      </NavLink>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => handleSuggestionClick()}
            >
              <NavLink className="nav-link" to={`/en/product/${getQueryId(suggestion)}`}>{suggestion}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;