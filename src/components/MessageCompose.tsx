import React, { useState } from 'react';
import { Toggle } from './Toggle.js';
import { Message } from '../domain/Message';

interface Props {
  onAddMessage: (message: Message) => void;
}

export const MessageCompose = ({ onAddMessage }: Props) => {
  const [inputValue, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onAddMessage({
      author: 'Andrey',
      id: Date.now().toString(),
      date: new Date().getTime(),
      message: inputValue
    });
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
