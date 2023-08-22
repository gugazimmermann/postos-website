'use client';

import React, { useState } from 'react';

function AutocompleteInput({
  loading,
  value,
  editValue,
  onBlur,
  disabled = false,
  required = true,
  type = 'text',
  name,
  suggestions,
}) {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const normalizeString = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const handleChange = (e) => {
    const inputVal = e.target.value;
    if (inputVal === '') {
      setShowSuggestions(false);
    } else {
      const newFilteredSuggestions = suggestions.filter((s) =>
        normalizeString(s.toLowerCase()).startsWith(normalizeString(inputVal.toLowerCase())),
      );
      setFilteredSuggestions(newFilteredSuggestions);
      setShowSuggestions(true);
    }
    editValue(inputVal);
  };

  const handleSuggestionClick = (s) => {
    editValue(s);
    setShowSuggestions(false);
  };

  return (
    <div className='relative'>
      <input
        required={required}
        disabled={disabled ? disabled : loading}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        className='bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg block w-full p-2.5'
      />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className='absolute top-full mt-1 w-full border border-t-0 rounded-b p-1 bg-white z-10'>
          {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
            <div
              key={index}
              className='cursor-pointer p-1 hover:bg-gray-200'
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AutocompleteInput;
