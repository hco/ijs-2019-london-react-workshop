import React, { useState } from 'react';
import { Toggle } from './Toggle';

export const MessageCompose = () => {
  const [inputValue, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setInput('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Toggle value={inputValue} />
      <input type="text" onChange={handleChange} value={inputValue} />
      <p>{inputValue}</p>
      <button type="submit">Submit</button>
    </form>
  );
};
