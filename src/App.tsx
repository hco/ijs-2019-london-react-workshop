import React from 'react';
import { Message } from './components/Message';
import { Message as MessageInterface } from './domain/Message';

export function App() {
  const message: MessageInterface = {
    id: '143BABB9-7759-4026-A559-DC2F5E9AC09D',
    author: 'foo',
    message: 'foobar baz ',
    date: new Date().getTime()
  };

  return (
    <React.Fragment>
      <h1>Hello Park Plaza!</h1>
      <Message message={message} />
    </React.Fragment>
  );
}
