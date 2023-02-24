import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ handleFormSubmit }) => {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(term);
  };

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={handleSubmit} className='ui form'>
        <div className='field'>
          <label htmlFor="input_search">
            <input onChange={handleChange} className='input_search' type="text" placeholder="Search the vídeo..."/>
          </label>
          <button type="submit" className="button_search">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
