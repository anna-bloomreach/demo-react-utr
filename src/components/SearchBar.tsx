import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { products } from '../data/products';
import ProductGrid from './ProductGrid';

const getQueryId = (query: string, language: string) => {
  const product = products.find(product => product[language as 'en' | 'cz'].name === query);
  return product?.id || '';
};

const SearchBar: React.FC<{ language: string }> = ({ language }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) return;

    setQuery(value);
    const filteredSuggestions = products.filter(product =>
      product[language as 'en' | 'cz'].name.toLowerCase().includes(value.toLowerCase())
    );
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

      <div className="search-bar-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={language === 'en' ? 'Search...' : 'Hledat...'}
          className="search-input"
        />
        <NavLink to={`/${language}/product/${getQueryId(query, language)}`} onClick={() => handleSearchClick()}>
          <button className="search-button">
            🔍
          </button>
        </NavLink>
      </div>

      <ProductGrid suggestions={suggestions} handleSuggestionClick={handleSuggestionClick} language={language} />
    </div>
  );
};

export default SearchBar;