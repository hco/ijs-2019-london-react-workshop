import React from 'react';

export const MessageCompose = () => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log('Hello World');
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};
